from sqlalchemy.orm import Session
import models, schemas

def get_notes(db: Session):
    return db.query(models.Note).all()

def create_note(db: Session, note: schemas.NoteCreate):
    db_note = models.Note(title=note.title, content=note.content)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def delete_note(db: Session, note_id: int):
    note = db.query(models.Note).filter(models.Note.id == note_id).first()
    if note:
        db.delete(note)
        db.commit()
    return {"message": "Note deleted"}

def update_note(db: Session, note_id: int, updated_note: schemas.NoteCreate):
    note = db.query(models.Note).filter(models.Note.id == note_id).first()
    if note:
        note.title = updated_note.title
        note.content = updated_note.content
        db.commit()
        db.refresh(note)
    return note
