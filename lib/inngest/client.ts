import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "foonda", 
  name: "Foonda",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
