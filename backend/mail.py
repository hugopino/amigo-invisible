import smtplib
from email.mime.text import MIMEText
from fastapi import HTTPException
from models import Participant
import os
from dotenv import load_dotenv

load_dotenv()

MAIL_SERVER_HOST = os.getenv("MAIL_SERVER_HOST")
MAIL_SERVER_PORT = os.getenv("MAIL_SERVER_PORT")
MAIL_SERVER_USER = os.getenv("MAIL_SERVER_USER")
MAIL_SERVER_PASS = os.getenv("MAIL_SERVER_PASS")


def send_mail(sender: str, receiver: Participant, message: str):

    msg = MIMEText(message)
    msg['Subject'] = f"{receiver.name}, este es tu amigo invisible..."
    msg['From'] = sender
    msg['To'] = receiver.email
    
    try:
        with smtplib.SMTP_SSL(MAIL_SERVER_HOST, MAIL_SERVER_PORT) as server:
            server.login(MAIL_SERVER_USER, MAIL_SERVER_PASS)
            server.send_message(msg)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))