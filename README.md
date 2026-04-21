# 🤖 Raju Ai

A full-stack AI chatbot named **Raju** — built with Node.js + Express on the backend and vanilla HTML/CSS/JS on the frontend, powered by **Groq's free LLaMA 3.3 70B model**.

---

## 🌐 Live Demo

| Part | URL |
|------|-----|
| 🖥️ Backend | `https://your-backend.up.railway.app` |
| 🌐 Frontend | `https://your-frontend.netlify.app` |

---

## 📁 Project Structure

```
ai-chatbot/
├── backend/
│   ├── server.js       ← Express API server
│   ├── package.json    ← Node dependencies
│   └── .env            ← Your Groq API key (never share this!)
│
├── frontend/
│   ├── index.html      ← Chat UI
│   ├── style.css       ← Styling
│   └── script.js       ← Frontend logic
│
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOURUSERNAME/raju-ai.git
cd raju-ai
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```
GROQ_API_KEY=gsk_your_groq_api_key_here
```

Get your free key at → https://console.groq.com/keys

Start the server:

```bash
node server.js
```

You should see:
```
✅ Raju's server is running on http://localhost:3001
```

### 3. Setup Frontend

No installation needed! Just open:
```
frontend/index.html
```
Double-click it in File Explorer — it opens in your browser instantly.

---

## 🚀 Deployment

### Backend → Railway

1. Go to https://railway.app and sign in with GitHub
2. Click **"New Project"** → **"Deploy from GitHub repo"**
3. Select this repository
4. Set root directory to `backend`
5. Add environment variable:
   ```
   GROQ_API_KEY=gsk_your_key_here
   ```
6. Click **"Generate Domain"** to get your live backend URL

### Frontend → Netlify

1. Go to https://netlify.com
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the `frontend/` folder
4. Update `API_URL` in `frontend/script.js` to your Railway backend URL:
   ```js
   const API_URL = "https://your-backend.up.railway.app/chat";
   ```
5. Redeploy — Raju is live! 🎉

---

## 🔑 Getting a Free Groq API Key

1. Go to → https://console.groq.com/keys
2. Sign up with your Google account (free, no credit card!)
3. Click **"Create API Key"**
4. Copy and paste into your `.env` file

---

## 🛠 Tech Stack

| Layer    | Technology                  |
|----------|-----------------------------|
| Backend  | Node.js, Express, CORS      |
| AI Model | LLaMA 3.3 70B via Groq API  |
| Frontend | HTML, CSS, Vanilla JS       |
| Hosting  | Railway (backend), Netlify (frontend) |

---

## ✨ Features

- 💬 Real-time chat with Raju
- ⌨️ Typing indicator while Raju thinks
- 📱 Responsive design (mobile friendly)
- 🎨 Dark theme UI
- ⚡ Super fast responses via Groq
- ✅ Press **Enter** or click **Send** to chat

---

## ⚠️ Important Notes

- Never commit your `.env` file to GitHub!
- Add `.env` to `.gitignore` to keep your key safe
- The backend must be running before using the frontend locally

---

## 📄 .gitignore

Make sure your `.gitignore` file contains:
```
.env
node_modules/
```

---

Made with ❤️ — Raju is always ready to chat!
