import Image from "next/image";

function Ad({ isLoading, prompt, onButtonClick }) {
  return (
    <div className="flex w-full md:w-3/4 bg-white h-24 flex-col mt-8 justify-center items-center">
      <span className="flex w-full h-24 justify-center text-4xl items-center text-gray-400">
        ad
      </span>
    </div>
  );
}

export default Ad;
