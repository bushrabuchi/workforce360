from getpass import getpass

from pydantic import EmailStr, TypeAdapter, ValidationError
from sqlalchemy import select

from app.database import Base, SessionLocal, engine
from app.models.user import User
from app.security import hash_password


def main() -> None:
    name = input("Name: ").strip()
    email_input = input("Email: ").strip()

    if not name:
        print("Name is required.")
        return

    try:
        email = str(
            TypeAdapter(EmailStr).validate_python(email_input)
        ).lower()
    except ValidationError:
        print("Enter a valid email address.")
        return

    password = getpass("Password (at least 15 characters): ")
    confirmation = getpass("Confirm password: ")

    if len(password) < 15:
        print("Use at least 15 characters.")
        return

    if len(password) > 1024:
        print("Password is too long.")
        return

    if password != confirmation:
        print("Passwords do not match.")
        return

    Base.metadata.create_all(bind=engine)

    with SessionLocal() as db:
        existing = db.scalar(
            select(User).where(User.email == email)
        )

        if existing is not None:
            print("An account with this email already exists.")
            return

        user = User(
            name=name,
            email=email,
            password_hash=hash_password(password),
        )

        db.add(user)
        db.commit()

    print("User created successfully.")


if __name__ == "__main__":
    main()