const API_URL = "http://localhost:3001/chat";

async function sendMessage() {
  const input = document.getElementById("input");
  const sendBtn = document.getElementById("send-btn");
  const chat = document.getElementById("chat");

  const userText = input.value.trim();
  if (!userText) return;

  // Add user message
  appendMessage("user", userText);
  input.value = "";
  sendBtn.disabled = true;

  // Show typing indicator
  const typingId = showTyping();

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();
    removeTyping(typingId);

    if (data.reply) {
      appendMessage("bot", data.reply);
    } else {
      appendMessage("bot", "⚠️ " + (data.error || "Something went wrong."));
    }
  } catch (err) {
    removeTyping(typingId);
    appendMessage("bot", "❌ Could not reach Raju's server. Make sure the backend is running on port 3001.");
  }

  sendBtn.disabled = false;
  input.focus();
}

function appendMessage(sender, text) {
  const chat = document.getElementById("chat");

  const wrapper = document.createElement("div");
  wrapper.className = `message ${sender === "bot" ? "bot-message" : "user-message"}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = formatText(text);

  wrapper.appendChild(bubble);
  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  const chat = document.getElementById("chat");
  const id = "typing-" + Date.now();

  const wrapper = document.createElement("div");
  wrapper.className = "message bot-message";
  wrapper.id = id;

  const bubble = document.createElement("div");
  bubble.className = "bubble typing-bubble";
  bubble.innerHTML = "<span></span><span></span><span></span>";

  wrapper.appendChild(bubble);
  chat.appendChild(wrapper);
  chat.scrollTop = chat.scrollHeight;

  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

// Basic text formatting: newlines → <br>, **bold**
function formatText(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}
