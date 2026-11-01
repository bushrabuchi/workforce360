from typing import Annotated, Literal

from pydantic import BaseModel, ConfigDict, Field, StringConstraints


SkillName = Annotated[
    str,
    StringConstraints(
        strip_whitespace=True,
        min_length=1,
        max_length=80,
    ),
]


class JobDescriptionRequest(BaseModel):
    model_config = ConfigDict(
        str_strip_whitespace=True,
        extra="forbid",
    )

    job_title: str = Field(min_length=3, max_length=100)
    department: str = Field(min_length=2, max_length=100)

    experience_level: Literal["Junior", "Mid-level", "Senior"]

    skills: list[SkillName] = Field(
        min_length=1,
        max_length=15,
    )

    language: Literal["English", "Arabic"] = "English"


class JobDescriptionResponse(BaseModel):
    draft: str