# 📝 Personal Notes App

A full-stack notes application that allows users to **add**, **view**, **edit**, and **delete** personal notes. Built with **FastAPI** for the backend and **HTML/CSS/JavaScript** for the frontend.

---

## 🚀 Live Demo

- 🔗 **Frontend:** [Frontend on Render](https://personal-notes-app-1.onrender.com)
- 🔗 **Backend API:** [https://personal-notes-app-ltnn.onrender.com](https://personal-notes-app-ltnn.onrender.com/)

---

## 🛠️ Tech Stack

| Layer      | Technology                    | Description                                  |
|------------|-------------------------------|----------------------------------------------|
| Frontend   | HTML, CSS, JavaScript         | Static site that interacts with backend APIs |
| Backend    | FastAPI, SQLAlchemy, Pydantic | RESTful API for note management              |
| Database   | SQLite                        | Lightweight, file-based DB for persistence   |
| Hosting    | Render                        | Free cloud deployment platform               |

---

## 📁 Project Structure

<img width="616" alt="Screenshot 2025-06-23 at 12 58 43 AM" src="https://github.com/user-attachments/assets/db90e2b0-a5a2-4db4-be50-5cfbc4252773" />


---

## 📦 Features

- 📝 Add a new note (title + content)
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 🔁 Real-time UI update using JavaScript
- 🌐 API-driven architecture

---

## 📡 API Endpoints

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| GET    | `/notes`         | Fetch all notes     |
| POST   | `/notes`         | Create a new note   |
| PUT    | `/notes/{id}`    | Update a note       |
| DELETE | `/notes/{id}`    | Delete a note       |

---

## 🧪 How to Run Locally

### 📥 Clone the repository Backend Setup

git clone https://github.com/ASKANADE18/personal-notes-app.git

### 🔙 Backend Setup

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

### 🔙 Frontend Setup

Open frontend/index.html in your browser
or
Use Live Server (e.g., from VSCode)
✅ Make sure CORS is enabled on the backend to allow frontend access.

---

## 🚀 Deployment

### 🔙 Backend Deployment (Render)

Root Directory: backend/

Build Command:
pip install -r requirements.txt

Start Command:
./start.sh

### 🌐 Frontend Deployment (Render)

Root Directory: frontend/

Framework Preset: Other

Build Command: (leave blank for static site)

Output Directory: frontend

### 📌 Notes

Make sure API endpoints in app.js point to your deployed Render backend URL.

Example:

const API_BASE_URL = "https://personal-notes-app-ltnn.onrender.com"; 





