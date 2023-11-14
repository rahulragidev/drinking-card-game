// components/Card.js
import React from "react";

function Card({ isLoading, prompt, onButtonClick }) {
  return (
    <div className="flex flex-col mt-8 w-full md:w-3/4 justify-center">
      <div className="flex items-center justify-center h-96 bg-slate-200 p-4 rounded-3xl shadow-black">
        <p
          className={`text-black font-bold text-center text-xl ${
            isLoading ? "text-opacity-50" : ""
          }`}
        >
          {isLoading ? "Loading..." : prompt}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="mt-4 px-6 py-2 max-w-fit bg-orange-300 text-orange-900 font-bold rounded-full disabled:opacity-50"
          onClick={onButtonClick}
          disabled={isLoading}
        >
          {isLoading ? "Drawing..." : "Draw Card"}
        </button>
      </div>
    </div>
  );
}

export default Card;
