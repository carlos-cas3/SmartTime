from dotenv import load_dotenv
import os

load_dotenv()  # Carga variables del .env

SUM_USER = os.getenv("SUM_USER")
SUM_PASS = os.getenv("SUM_PASS")

