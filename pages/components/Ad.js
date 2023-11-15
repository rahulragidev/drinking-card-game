import Image from "next/image";

function Ad({ isLoading, prompt, onButtonClick }) {
  return (
    <div className="flex w-full md:w-3/4 bg-white h-24 flex-col mt-8 justify-center items-center">
      <span className="flex w-full h-24 justify-center text-4xl items-center text-gray-400">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2566390247263128"
          crossorigin="anonymous"
        ></script>
      </span>
    </div>
  );
}

export default Ad;
