from typing import List
from collections import defaultdict
from models import Participant
import random

def generate_invisible_friends(participants: List[Participant]) -> List[Participant]:
    n = len(participants)
    
    if n < 2:
        raise ValueError("Se necesitan al menos dos participantes para el juego de amigos invisibles.")
    
    shuffled_participants = participants.copy()
    random.shuffle(shuffled_participants)
    
    for i, participant in enumerate(shuffled_participants):
        if participant == participants[i]:
            next_i = (i + 1) % n
            shuffled_participants[i], shuffled_participants[next_i] = shuffled_participants[next_i], shuffled_participants[i]
    
    return shuffled_participants


class SafeDict(defaultdict):
    def __missing__(self, key):
        return '{' + key + '}'

def safe_format(s: str, **kwargs) -> str:
    substitutions = SafeDict(str, **kwargs)
    return s.format_map(substitutions)
