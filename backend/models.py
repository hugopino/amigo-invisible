from pydantic import BaseModel, EmailStr
from typing import List

class Participant(BaseModel):
    name: str
    email: EmailStr

class MailRequest(BaseModel):
    participants: List[Participant]
    message: str
