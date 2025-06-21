const titleInput = document.getElementById("note-title");
const contentInput = document.getElementById("note-content");
const addButton = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");
let isEditing = false;
let editNoteId = null;

// 🌐 FastAPI backend base URL
const API_BASE_URL = "https://personal-notes-app-e32v.onrender.com";

// 📥 Fetch and display notes on page load
window.onload = () => {
  fetchNotes();
};

// 🔄 Fetch all notes from backend
function fetchNotes() {
  fetch(`${API_BASE_URL}/notes`)
    .then(res => res.json())
    .then(data => {
      notesContainer.innerHTML = "";  // Clear existing notes
      data.forEach(note => {
        renderNote(note);
      });
    })
    .catch(err => console.error("Error fetching notes:", err));
}

// ➕ Add or ✏️ Update note
addButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Please fill in both title and content.");
    return;
  }

  if (isEditing) {
    // PUT: update note
    fetch(`${API_BASE_URL}/notes/${editNoteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    })
      .then(res => res.json())
      .then(updatedNote => {
        isEditing = false;
        editNoteId = null;
        addButton.textContent = "Add Note";
        fetchNotes();
        titleInput.value = "";
        contentInput.value = "";
      })
      .catch(err => console.error("Error updating note:", err));
  } else {
    // POST: create new note
    fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, content })
    })
      .then(res => res.json())
      .then(data => {
        renderNote(data);
        titleInput.value = "";
        contentInput.value = "";
      })
      .catch(err => console.error("Error adding note:", err));
  }
});

// 🧱 Render a single note card
function renderNote(note) {
  const noteCard = document.createElement("div");
  noteCard.className = "note-card";
  noteCard.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
    <div class="card-buttons">
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
    </div>
  `;

  // 🗑️ Delete note
  noteCard.querySelector(".delete-btn").addEventListener("click", () => {
    fetch(`${API_BASE_URL}/notes/${note.id}`, {
      method: "DELETE"
    })
      .then(() => {
        notesContainer.removeChild(noteCard);
      })
      .catch(err => console.error("Error deleting note:", err));
  });

  // ✏️ Edit note
  noteCard.querySelector(".edit-btn").addEventListener("click", () => {
    titleInput.value = note.title;
    contentInput.value = note.content;
    isEditing = true;
    editNoteId = note.id;
    addButton.textContent = "Update Note";
  });

  notesContainer.appendChild(noteCard);
}
