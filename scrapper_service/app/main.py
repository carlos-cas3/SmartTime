from fastapi import FastAPI
from .routes import router

app = FastAPI(title="Scraper Service")

app.include_router(router)
