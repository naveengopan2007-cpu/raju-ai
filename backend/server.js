import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["https://remarkable-halva-118d4f.netlify.app", "https://tranquil-ganache-49a136.netlify.app", "http://localhost:5500", "null"],
  methods: ["GET", "POST"]
}));
app.use(express.json());

// Initialize Groq client (FREE!)
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || userMessage.trim() === "") {
    return res.status(400).json({ error: "Message cannot be empty." });
  }

  try {
    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are Raju, a friendly, witty, and helpful AI assistant.
You have a warm personality and enjoy helping people with all kinds of questions.
You speak in a friendly, conversational tone.
Keep your answers concise but helpful.
Occasionally add a touch of humor when appropriate.`,
        },
        { role: "user", content: userMessage },
      ],
      max_tokens: 1024,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("Groq Error:", error.message);
    res.status(500).json({ error: "Raju is having a bad day. Try again!" });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Raju is online and powered by Groq! 🤖" });
});

app.listen(3001, () => {
  console.log("✅ Raju's server is running on http://localhost:3001");
});