from pydantic import BaseModel

class NoteBase(BaseModel):
    title: str
    content: str

class NoteCreate(NoteBase):
    pass  # Used when creating a new note

class Note(NoteBase):
    id: int

    class Config:
        orm_mode = True
