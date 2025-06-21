// Step 1: Get references to the input fields and button
const titleInput = document.getElementById("note-title");
const contentInput = document.getElementById("note-content");
const addButton = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");

// Step 2: Set up click event
addButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // Step 3: Validate input
  if (!title || !content) {
    alert("Please fill in both title and content.");
    return;
  }

  // Step 4: Create a new note card
  const noteCard = document.createElement("div");
  noteCard.className = "note-card";

  noteCard.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="delete-btn">Delete</button>
  `;

  // Step 5: Add delete functionality
  const deleteBtn = noteCard.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    notesContainer.removeChild(noteCard);
  });

  // Step 6: Add the note card to the container
  notesContainer.appendChild(noteCard);

  // Step 7: Clear the form
  titleInput.value = "";
  contentInput.value = "";
});
