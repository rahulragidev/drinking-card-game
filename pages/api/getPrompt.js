// pages/api/getPrompt.js
import { OpenAI } from "openai";

// Initialize the OpenAI instance with the API key from the environment variable
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// This function calls the OpenAI API and returns the response
async function generateResponse(promptText) {
  try {
    // Use the completions.create method instead of createCompletion
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a drinking game task generator" },
        { role: "user", content: "generate drinking game task" },
        {
          role: "assistant",
          content: promptText + ", do it or drink",
        },
      ],
    });

    console.log("response", JSON.stringify(response, null, 2));

    // Extract the message from the completion response
    const message = response.choices[0].message.content;
    return message;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw new Error("OpenAI API call failed");
  }
}

// The API handler function for the POST request
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Check if the prompt is provided in the request body
      if (!req.body.prompt) {
        return res.status(400).json({ error: "No prompt provided" });
      }

      // Call the generateResponse function with the prompt from the request body
      const promptText = req.body.prompt;
      const responseMessage = await generateResponse(promptText);

      // Send the response back to the client
      res.status(200).json({ response: responseMessage });
    } catch (error) {
      // Log the error and send a 500 Internal Server Error response
      console.error("Error in POST /api/getPrompt:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    res.status(405).json({ error: "Method not allowed" });
  }
}
