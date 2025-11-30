import { GoogleGenAI } from "@google/genai";
import { DemoPersona } from "../types";

// Initialize Gemini
// Note: In a real production app, ensure API_KEY is set. 
// For this demo, we handle the case gracefully if it's missing.
const apiKey = process.env.API_KEY || 'dummy_key'; 
const ai = new GoogleGenAI({ apiKey });

export const generateConversationScript = async (persona: DemoPersona): Promise<string> => {
  if (apiKey === 'dummy_key') {
    return `[System: API Key missing. Simulating response for ${persona.name}]\n\nAgent: Jambo! This is ${persona.name} from Sauti AI ${persona.industry} solutions. How can I assist you today?\n\nCustomer: Hi, I'm checking on my request.\n\nAgent: Asante sana for calling. I can certainly help with that. Could you please confirm your account number?`;
  }

  try {
    const prompt = `
      Generate a realistic, short dialogue script (approx 100 words) between an AI Agent from "Sauti AI" and a Customer in the African market.
      
      Context:
      Agent Name: ${persona.name}
      Role: ${persona.role}
      Industry: ${persona.industry}
      Goal: ${persona.description}
      Tone: Professional, warm, helpful, culturally relevant to Africa (Kenya/Nigeria/South Africa context).
      
      Format the output as a script:
      Agent: [Line]
      Customer: [Line]
      ...
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Sorry, I couldn't generate a script at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating script. Please check your API key.";
  }
};