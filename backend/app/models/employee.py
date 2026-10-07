from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Employee(Base):

    __tablename__ = "employees"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    name: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )

    email: Mapped[str] = mapped_column(
        String(150),
        unique=True,
        nullable=False,
        index=True
    )

    department: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    position: Mapped[str] = mapped_column(
        String(150),
        nullable=False
    )

    status: Mapped[str] = mapped_column(
        String(30),
        nullable=False
    )

    joinDate: Mapped[str] = mapped_column(
        String(20),
        nullable=False
    )

    avatar: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
        default=""
    )