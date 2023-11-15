// pages/index.js
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Ad from "./components/Ad";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Head from "next/head";

export default function Home() {
  const [prompt, setPrompt] = useState("Draw a card to start the game");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generateResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt:
            "Generate a unique and enjoyable drinking game card for do it or drink it card game",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrompt(data.response);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setPrompt("Failed to draw a card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-400 to-orange-600 ">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2566390247263128"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Logo />
      <Ad />
      <Card
        isLoading={isLoading}
        prompt={prompt}
        onButtonClick={handleButtonClick}
      />
      <Footer />
    </div>
  );
}
