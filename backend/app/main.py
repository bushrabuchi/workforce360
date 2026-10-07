from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.models.employee import Employee

from app.routers.employees import router as employee_router


# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Workforce360 API",
    description="Enterprise Workforce Management API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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