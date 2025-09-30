from fastapi import APIRouter
from .scrapper import scrape_sum_selenium
from .login_sum import login_sum

router = APIRouter()

@router.get("/scraping/sum")
def get_sum_data():
    data = scrape_sum_selenium()
    return {"horario": data}


@router.get("/login/sum")
def login_sum_endpoint():
    driver = login_sum(headless=True)  # headless=True para que no abra ventana
    if driver:
        driver.quit()
        return {"status": "ok", "message": "Login exitoso en SUM"}
    else:
        return {"status": "error", "message": "No se pudo iniciar sesión"}
    