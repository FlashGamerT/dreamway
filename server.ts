import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK securely on the server
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not defined in the environment secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// AI Assistant Knowledge Base and system instruction
const SYSTEM_INSTRUCTION = `
You are the dedicated AI Assistant for Dream Way Travels, located in Kondotty, Malappuram, Kerala (just minutes away from Calicut International Airport - CCJ).

About Dream Way Travels:
- Location: Kondotty (Malappuram District, Kerala, India), very close to Calicut International Airport (CCJ).
- Key Focus: Premium and urgent flight bookings (International & Domestic), flight ticket updates, date changes, rescheduling, cancellations, baggage inquiries, seat selections, and comprehensive flight ticketing. Since CCJ (Calicut Airport) is our neighbor, we specialize in immediate and expat flight assistance!
- Visa Services: Expert slots and paperwork processing assistance for Gulf / GCC Countries (Saudi Arabia, UAE, Qatar, Oman, Bahrain, Kuwait), Europe/Schengen, USA, United Kingdom, Malaysia, and Singapore tourist/business visas.
- EXCLUSION: Note that we DO NOT operate structured bulk leisure tour packages anymore. Please politely clarify to users that we focus strictly on bespoke Flight Ticket Bookings, Hotel Row Stays, Visa slots assistance, and Travel Insurance to maintain absolute premium quality!
- Support: 24/7 client helpline. Walk-in office is open daily from 9:00 AM to 9:00 PM.
- Phone/WhatsApp contact: +91 99957 30044.

Tone & Persona:
- Professional, supportive, and humble. Keep responses clear and formatted in markdown.
- Highlight the instant WhatsApp button on the page or direct hotline (+91 99957 30044) whenever the user wishes to make a confirmed flight booking or schedule an urgent visa slot.
- Keep answers concise, direct, helpful, and completely genuine with no unneeded fluff.
`;

// API routes
app.post("/api/chat", async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGeminiClient();
    
    // Prepare contents by compiling previous history if present
    const contents = [];
    if (history && Array.isArray(history)) {
      // Map history format: { role: 'user' | 'model', part: string }
      for (const turn of history) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      }
    }
    
    // Append current message
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I'm here to assist you with flight ticketing and visa requirements. Please contact our live desk support +91 99957 30044 or click on WhatsApp!";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Error in Gemini API route:", error);
    return res.status(500).json({
      error: "Unable to process request at this time.",
      details: error?.message || "Internal error",
    });
  }
});

// App health check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Setup Vite Dev Server / Static Files middleware
async function start() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development server middleware loaded.");
  } else {
    // Production mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from:", distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Dream Way Travels fullstack server initialized at http://localhost:${PORT}`);
  });
}

start();
