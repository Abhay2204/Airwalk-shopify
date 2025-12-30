import { GoogleGenAI } from "@google/genai";

// Initialize the client strictly as requested
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userPrompt: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: You are a helpful, stylish AI assistant for a high-end shoe store called "Shopily". 
      The store sells premium footwear including Running, Lifestyle, Outdoor, and Formal shoes.
      Your tone should be sophisticated, helpful, and concise. 
      Use the provided user query to offer advice or answer questions about shoes.
      
      User Query: ${userPrompt}
      
      Additional Data Context: ${context}`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to the fashion servers right now. Please try again later.";
  }
};
