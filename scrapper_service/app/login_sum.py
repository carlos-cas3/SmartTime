from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from app.config import SUM_USER, SUM_PASS  # tus credenciales

def login_sum(headless=False):
    login_url = "https://sum.unmsm.edu.pe/alumnoWebSum/"

    # Configuración de Chrome
    chrome_opts = Options()
    if headless:
        chrome_opts.add_argument("--headless=new")
    chrome_opts.add_argument("--no-sandbox")
    chrome_opts.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(
        service=Service(ChromeDriverManager().install()),
        options=chrome_opts
    )

    try:
        driver.get(login_url)

        wait = WebDriverWait(driver, 15)

        # Esperar a que aparezca el input de usuario
        input_user = wait.until(EC.presence_of_element_located((By.NAME, "login")))
        input_pass = driver.find_element(By.NAME, "clave")

        # Rellenar campos
        input_user.clear()
        input_user.send_keys(SUM_USER)
        input_pass.clear()
        input_pass.send_keys(SUM_PASS)

        # Buscar y hacer click en el botón de login
        try:
            boton = driver.find_element(By.CSS_SELECTOR, "form button[type='submit']")
        except:
            boton = driver.find_element(By.CSS_SELECTOR, "button")

        boton.click()

        # Esperar a que cargue la siguiente página (por ejemplo, que exista el body con id=body)
        wait.until(EC.presence_of_element_located((By.ID, "body")))

        print("✅ Login exitoso")
        return driver  # devolvemos el driver logueado para seguir usándolo
    except Exception as e:
        print("❌ Error en login:", e)
        driver.quit()
        return None
