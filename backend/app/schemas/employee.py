from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Literal


class EmployeeBase(BaseModel):

    name: str
    email: EmailStr
    department: str
    position: str
    status: Literal[
        "Active",
        "On Leave",
        "Inactive"
    ]
    joinDate: str
    avatar: str


class EmployeeCreate(EmployeeBase):
    pass


class EmployeeUpdate(EmployeeBase):
    pass


class EmployeeResponse(EmployeeBase):

    id: int

    model_config = ConfigDict(
        from_attributes=True
    )