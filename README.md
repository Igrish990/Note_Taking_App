
# 📝 Note Taking Application

A full-stack **Note Taking App** built with **React (Vite)** and **Node.js/Express**, backed by **MongoDB**. Offers secure CRUD operations on notes, rate limiting, and modern UI/UX practices.

---

## 🔧 Tech Stack

### 🚀 Frontend
- **React + Vite**
- **React Router DOM** – for client-side routing  
- **Axios** – for API communication  
- **React Hot Toast** – for toast notifications

### 🛠️ Backend
- **Node.js + Express**
- **MongoDB with Mongoose** – for database modeling  
- **dotenv** – for environment variables  
- **CORS** – for cross-origin support  
- **Rate Limiting** – using `@upstash/ratelimit` and `@upstash/redis`








## ✅ Key Features

- **Note Management (CRUD)** – Create, Read, Update, and Delete notes
- **Rate Limiting** – Prevent API abuse
- **Cross-Origin Access** – Enables frontend-backend communication (`localhost:5173` ↔ `localhost:5001`)
- **.env Support** – Keep sensitive credentials out of version control
- **Global Error Handling** – Graceful UI alerts for network/validation errors
- **Modern React** – Utilizes Hooks, Router, Toasts

---

## 🔐 .gitignore Highlights

- **Sensitive Files:** `.env`  
- **Node & Build Artifacts:** `node_modules`, `dist`, `.next`, etc.  
- **Editor Settings:** `.vscode`, `.idea`, `.DS_Store`

---

## ▶️ How to Run Locally

### 🔹 Backend

cd backend

npm install

npm run dev


### 🔹 Frontend


cd frontend

npm install

npm run dev


### 🌐 Backend API

Runs at: `http://localhost:5001/api/notes`

---

## 🛡️ Deployment & Dev Tips

* ✅ **Secure for GitHub:** Secrets and unnecessary files excluded
* ⚡ **Quick Setup:** Just clone → install → add `.env` → run
* 🧩 **Modular Codebase:** Easy to scale and maintain

---

## 🧪 Future Enhancements (Optional Ideas)

* User authentication with JWT
* Search and filter functionality
* Rich text editor for notes
* Cloud deployment (e.g., Vercel + Render)
* Light/Dark theme toggle


