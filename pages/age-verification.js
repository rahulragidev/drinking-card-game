// pages/age-verification.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import Logo from "./components/Logo";

const AgeVerification = () => {
  const router = useRouter();

  const handleAgeVerification = () => {
    // Simulate age verification logic (for demonstration purposes)
    const isLegalAge = true; // Change this based on your actual verification logic

    if (isLegalAge) {
      localStorage.setItem("ageVerified", "true");
      router.push("/");
    } else {
      alert("You are not of legal drinking age.");
    }
  };

  const handleNoButtonClick = () => {
    // Handle the case where the user declines age verification (optional)
    alert("You have declined age verification.");
    // You can choose to handle this scenario differently based on your requirements.
  };

  return (
    <>
      <Logo />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold">Age Verification</h1>
        <p>
          By clicking the button below, I confirm that I am of legal drinking
          age and a responsible drinker:
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleAgeVerification}
        >
          I Confirm My Legal Drinking Age and Responsible Drinker
        </button>
        <p className="mt-4">If not, you can choose:</p>
        <button
          className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleNoButtonClick}
        >
          No, I Decline Age Verification
        </button>
      </div>
    </>
  );
};

export default AgeVerification;
