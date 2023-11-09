import { useState } from "react";
import { motion } from "framer-motion";

function Card() {
  const [prompt, setPrompt] = useState("Draw a card to start the game");
  const [isLoading, setIsLoading] = useState(false);

  // Add a more dynamic background animation
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(135deg, rgba(255,0,204,1) 0%, rgba(255,204,0,1) 100%)",
        "linear-gradient(135deg, rgba(0,204,255,1) 0%, rgba(204,0,255,1) 100%)",
      ],
      transition: {
        duration: 7,
        yoyo: Infinity,
      },
    },
  };

  // Enhanced card variants for a lively bounce effect
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  // Enhanced button variants for a 3D effect and satisfying interaction
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)" },
    tap: { scale: 0.95 },
  };

  // The handleButtonClick function remains unchanged to ensure functionality is the same
  const handleButtonClick = async () => {
    setIsLoading(true); // Start loading
    try {
      const response = await fetch("/api/getPrompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "generate drinking game task" }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data", data);
      setPrompt(data.response); // Update the prompt with the response
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setPrompt("Failed to draw a card. Please try again."); // Set an error message
    }

    setIsLoading(false); // End loading
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full p-4"
      variants={backgroundVariants}
      initial="animate"
      animate="animate"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          color: ["#ff00cc", "#ffcc00", "#00ffcc", "#cc00ff"],
        }} // Bright, retro color cycling
        transition={{
          duration: 0.5,
          delay: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        🎉 Drinking Game 🎉
      </motion.h2>

      <motion.div
        className="w-80 h-96 rounded-xl shadow-2xl p-6 mx-auto my-8 flex items-center justify-center relative text-center border-4 border-white"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xl md:text-2xl font-semibold text-white z-10"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isLoading ? "Drawing..." : prompt}
        </motion.p>
        <div className="absolute top-0 left-0 m-2 text-3xl">🎈</div>
        <div className="absolute top-0 right-0 m-2 text-3xl">🎉</div>
        <div className="absolute bottom-0 left-0 m-2 text-3xl">💃</div>
        <div className="absolute bottom-0 right-0 m-2 text-3xl">🕺</div>
      </motion.div>

      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="mt-4 bg-blue-600 text-white font-bold uppercase rounded-full text-sm px-6 py-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out"
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? "Please Wait..." : "Draw a Card"}
      </motion.button>
    </motion.div>
  );
}

export default Card;
