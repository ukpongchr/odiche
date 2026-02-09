import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I'm currently having trouble connecting to my brain (API Key missing). Please try again later.";
  }

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are a helpful and empathetic virtual assistant for 'Odiche Specialist Hospital', located in Umuahia Village, Obingwa Local Government Area, Abia State, Nigeria.
        
        Your goals are:
        1. Answer general health-related questions.
        2. Provide information about our specific services: General emergency services, Paediatrics, Surgery, Obstetrics & Gynaecology, Laboratory services, and Pharmacy.
        3. Assist with navigating the website.
        4. Always maintain a professional, calm, and medical tone suitable for a Nigerian audience.
        
        Key Info:
        - Location: Umuahia Village, Obingwa LGA, Abia State.
        - Services: Emergency, Surgery, Maternity (OB/GYN), Children's Health (Paediatrics), Lab tests, Drugs (Pharmacy).
        - Target Audience: Families in Obingwa and surrounding communities.
        
        CRITICAL DISCLAIMER: You must NOT provide medical diagnoses or prescribe medication. Always advise the user to book an appointment with a specialist for specific medical advice. If a user describes severe symptoms (chest pain, trouble breathing, heavy bleeding), tell them to come to the emergency unit immediately.
        
        Keep your answers concise and easy to read.`,
        temperature: 0.7,
      }
    });

    return response.text || "I didn't understand that. Could you please rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Please try again in a moment.";
  }
};