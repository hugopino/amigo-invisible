from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware
from models import MailRequest
from mail import send_mail
from utils import generate_invisible_friends, safe_format
from dotenv import load_dotenv
import os 

app = FastAPI()

load_dotenv()

ORIGINS = ["http://localhost:3000"]
MAX_ATTEMPTS = 10

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/")
async def main(mail_request: MailRequest):

    participants = mail_request.participants
    message = mail_request.message

    if len(participants) < 2:
        raise HTTPException(status_code=400, detail="Necesitas al menos dos participantes.")
    if message == "":
        raise HTTPException(status_code=400, detail="El mensaje no puede estar vacío.")

    invisible_friends = generate_invisible_friends(participants)

    for participant, friend in zip(participants, invisible_friends):
        personalized_message = safe_format(
            message, 
            regalador=participant.name, 
            receptor=friend.name, 
            emailRegalador=participant.email, 
            emailReceptor=friend.email
        )

        send_mail(os.getenv("MAIL_SERVER_USER"), participant, personalized_message)

    return {"message": "Emails sent successfully"}







