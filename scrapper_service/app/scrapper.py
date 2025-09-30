# scrapper_selenium.py
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
from app.config import SUM_USER, SUM_PASS


def scrape_sum_selenium(headless=True, wait_timeout=20):
    """
    Usar Selenium para loguearse en SUM, esperar a que #calendar esté renderizado
    y extraer los eventos del calendario.
    Devuelve una lista de dicts: {date, start, end, course, section, calendar_id, schedule_id}
    """

    base_url = "https://sum.unmsm.edu.pe/alumnoWebSum/"
    login_url = base_url + "login"
    horario_url = (
        base_url + "v2/reportes/horarios"
    )  # si necesitas abrir esta URL directamente

    # --- configurar ChromeDriver ---

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()), options=chrome_opts
    )


    try:
        driver.get(login_url)
        # esperar que los inputs estén presentes
        wait = WebDriverWait(driver, wait_timeout)

        # Encontrar campos por name/id (según tu HTML)
        input_user = wait.until(EC.presence_of_element_located((By.NAME, "login")))
        input_pass = driver.find_element(By.NAME, "clave")

        # rellenar
        input_user.clear()
        input_user.send_keys(SUM_USER)
        input_pass.clear()
        input_pass.send_keys(SUM_PASS)

        # intentar encontrar botón submit (puede variar)
        # probamos por tipo submit o por botón dentro del form
        try:
            boton = driver.find_element(By.CSS_SELECTOR, "form button[type='submit']")
        except Exception:
            try:
                boton = driver.find_element(By.CSS_SELECTOR, "button.btn")  # fallback
            except Exception:
                boton = None

        if boton:
            boton.click()
        else:
            # si no hay botón, enviar formulario con ENTER
            input_pass.send_keys("\n")

        # --- esperar a que el calendario se cargue ---
        # a veces hay redirecciones JS, así que esperamos hasta que aparezca #calendar
        wait.until(EC.presence_of_element_located((By.ID, "calendar")))
        # dejar un pequeño margen para que los eventos se rendericen
        time.sleep(1.0)

        # --- ahora extraer datos ---
        # tomamos el HTML ya renderizado y lo parseamos con BeautifulSoup para facilitar
        html = driver.page_source
        soup = BeautifulSoup(html, "html.parser")

        # Lista de fechas (header) -> contienen data-date
        dayname_elems = soup.select("#calendar .tui-full-calendar-dayname")
        dates = [d.get("data-date") for d in dayname_elems if d.get("data-date")]

        # Lista de contenedores de día (en la grilla de eventos) en el mismo orden
        day_containers = soup.select("#calendar .tui-full-calendar-time-date")
        # para mapear index -> date intentamos por orden
        day_count = len(day_containers)

        events = []
        # todos los bloques de schedule (cada evento visual)
        schedule_blocks = soup.select(
            "#calendar .tui-full-calendar-time-date-schedule-block"
        )

        for block in schedule_blocks:
            # el div interno que tiene data-schedule-id y data-calendar-id
            inner = block.select_one("[data-schedule-id]")
            if not inner:
                inner = block.select_one("div[data-schedule-id], div[data-calendar-id]")

            schedule_id = inner.get("data-schedule-id") if inner else None
            calendar_id = inner.get("data-calendar-id") if inner else None

            content = block.select_one(".tui-full-calendar-time-schedule-content")
            if not content:
                # examina otras clases: .tui-full-calendar-time-schedule-content-time
                content = block.select_one(
                    ".tui-full-calendar-time-schedule-content-time"
                )

            # extraer hora desde <strong> si existe: "18:00 - 20:00"
            start, end = None, None
            if content:
                strong = content.find("strong")
                if strong:
                    hora_text = strong.get_text(strip=True)
                    if "-" in hora_text:
                        parts = [p.strip() for p in hora_text.split("-")]
                        if len(parts) >= 2:
                            start, end = parts[0], parts[1]

                # el resto del texto suele contener curso y sección. sacar líneas sin la hora
                txt = content.get_text("\n", strip=True)
                # remover la línea que contiene la hora
                lines = [line.strip() for line in txt.splitlines() if line.strip()]
                # si el primer elemento es la hora, descartarlo
                if (
                    lines
                    and strong
                    and lines[0].startswith(strong.get_text(strip=True))
                ):
                    lines = lines[1:]

                course = lines[0] if len(lines) >= 1 else ""
                section = lines[1] if len(lines) >= 2 else ""

            else:
                course = ""
                section = ""

            # determinar a qué día pertenece: buscar el ancestor div.tui-full-calendar-time-date
            ancestor = block.find_parent(class_="tui-full-calendar-time-date")
            day_index = None
            if ancestor and day_containers:
                try:
                    day_index = day_containers.index(ancestor)
                except ValueError:
                    # comparación por equivalencia de atributos: buscar por style left
                    ancestor_left = ancestor.get("style", "")
                    for idx, d in enumerate(day_containers):
                        if d.get("style", "") == ancestor_left:
                            day_index = idx
                            break

            date = (
                dates[day_index]
                if (day_index is not None and day_index < len(dates))
                else None
            )

            events.append(
                {
                    "date": date,
                    "start": start,
                    "end": end,
                    "course": course,
                    "section": section,
                    "calendar_id": calendar_id,
                    "schedule_id": schedule_id,
                }
            )

        return events

    finally:
        driver.quit()
