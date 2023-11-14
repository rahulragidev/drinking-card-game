import React from "react";

function Button(props) {
  return (
    <button
      className="mt-4 px-6 py-2 bg-orange-300 text-orange-900 font-bold rounded-full disabled:opacity-50"
      onClick={props.onButtonClick}
      disabled={props.isLoading}
    >
      {isLoading ? "Drawing..." : "Draw Card"}
    </button>
  );
}

export default Button;
