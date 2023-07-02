from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class Participant(BaseModel):
    name: str
    email: EmailStr


@app.post("/api/v1/send-mails")
async def root():
    return {"message": "Hello World"}
