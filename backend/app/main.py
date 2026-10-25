from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.user import User
from app.routers.auth import router as auth_router
from app.database import engine, Base
from app.models.employee import Employee

from app.routers.employees import router as employee_router
import os

# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Workforce360 API",
    description="Enterprise Workforce Management API",
    version="1.0.0"
)


allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:4200",
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

app.include_router(employee_router)


@app.get("/")
def root():
    return {
        "message": "Workforce360 API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }