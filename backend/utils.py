import random
from typing import List
from collections import defaultdict
from models import Participant

def generate_invisible_friends(participants: List[Participant], max_attempts=10, attempt=0):
    friends = [participant for participant in participants]
    random.shuffle(friends)

    for original, shuffled in zip(participants, friends):
        if original.name == shuffled.name:
            if attempt < max_attempts:
                return generate_invisible_friends(participants, max_attempts, attempt+1)
            else:
                raise ValueError("No se pudo generar una asignación de amigos invisibles después de varios intentos.")

    return friends


def safe_format(s: str, **kwargs) -> str:
        class SafeDict(defaultdict):
            def __missing__(self, key):
                return '{' + key + '}'

        substitutions = SafeDict(str, **kwargs)
        return s.format_map(substitutions)