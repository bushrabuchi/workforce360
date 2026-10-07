from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.employee import Employee
from app.schemas.employee import (
    EmployeeCreate,
    EmployeeUpdate,
    EmployeeResponse
)


router = APIRouter(
    prefix="/api/employees",
    tags=["Employees"]
)


# GET ALL EMPLOYEES
@router.get(
    "/",
    response_model=list[EmployeeResponse]
)
def get_employees(
    db: Session = Depends(get_db)
):

    return db.query(Employee).all()


# GET SINGLE EMPLOYEE
@router.get(
    "/{employee_id}",
    response_model=EmployeeResponse
)
def get_employee(
    employee_id: int,
    db: Session = Depends(get_db)
):

    employee = db.get(Employee, employee_id)

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    return employee


# CREATE EMPLOYEE
@router.post(
    "/",
    response_model=EmployeeResponse,
    status_code=201
)
def create_employee(
    employee: EmployeeCreate,
    db: Session = Depends(get_db)
):

    existing_employee = (
        db.query(Employee)
        .filter(Employee.email == employee.email)
        .first()
    )

    if existing_employee:
        raise HTTPException(
            status_code=400,
            detail="Employee with this email already exists"
        )

    new_employee = Employee(
        **employee.model_dump()
    )

    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)

    return new_employee


# UPDATE EMPLOYEE
@router.put(
    "/{employee_id}",
    response_model=EmployeeResponse
)
def update_employee(
    employee_id: int,
    employee_data: EmployeeUpdate,
    db: Session = Depends(get_db)
):

    employee = db.get(Employee, employee_id)

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    update_data = employee_data.model_dump()

    for field, value in update_data.items():
        setattr(employee, field, value)

    db.commit()
    db.refresh(employee)

    return employee


# DELETE EMPLOYEE
@router.delete("/{employee_id}")
def delete_employee(
    employee_id: int,
    db: Session = Depends(get_db)
):

    employee = db.get(Employee, employee_id)

    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )

    db.delete(employee)
    db.commit()

    return {
        "message": "Employee deleted successfully",
        "id": employee_id
    }