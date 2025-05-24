import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiModels = [
  {
    name: "Gemini 1.5 Flash (Latest)",
    model: "models/gemini-1.5-flash-latest",
  },
  {
    name: "Gemini 1.5 Flash",
    model: "models/gemini-1.5-flash",
  },
  {
    name: "Gemini 2.5 Flash Preview 04-17",
    model: "models/gemini-2.5-flash-preview-0417",
  },
  {
    name: "Gemini 2.5 Pro Preview 05-06",
    model: "models/gemini-2.5-pro-preview-0506",
  },
  {
    name: "Gemini 2.0 Flash",
    model: "models/gemini-2.0-flash",
  },
  {
    name: "Gemini 2.0 Flash-Lite",
    model: "models/gemini-2.0-flash-lite",
  },
];

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

/**
 * Tries each model in order until one succeeds in generating content.
 */
export const generateWithFallback = async (fileUri, userPrompt) => {
  for (let { name, model } of geminiModels) {
    try {
      const generativeModel = genAI.getGenerativeModel({ model });

      const result = await generativeModel.generateContent([
        userPrompt,
        {
          fileData: {
            fileUri,
          },
        },
      ]);

      const text = await result.response.text();
      if (text) {
        return text;
      }
    } catch (err) {
      console.warn(`⚠️ Failed with model ${name}: ${err.message}`);
    }
  }

  throw new Error("❌ All models failed to generate a response.");
};

// Usage
