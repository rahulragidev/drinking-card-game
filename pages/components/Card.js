import { useState } from "react";

function Card() {
  const [prompt, setPrompt] = useState("");

  const handleButtonClick = async () => {
    // Define the prompt text you want to send to the OpenAI API
    const promptText = "give me a random number"; // Replace with the actual prompt you want to send

    // Call the API endpoint you set up
    const response = await fetch("/api/getPrompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Make sure to set the content type header
      },
      body: JSON.stringify({ prompt: promptText }), // Send the prompt in the request body
    });

    if (!response.ok) {
      // Handle errors here, such as displaying a message to the user
      console.error("There was a problem with the API request");
      return;
    }

    const data = await response.json();
    setPrompt(data.response);
  };

  return (
    <div className="p-8 bg-black rounded shadow-lg text-center">
      <h2 className="text-2xl mb-4">Drinking Game</h2>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white rounded px-4 py-2 mb-4"
      >
        Draw a Card
      </button>
      {prompt && <p className="text-xl">{prompt}</p>}
    </div>
  );
}

export default Card;
