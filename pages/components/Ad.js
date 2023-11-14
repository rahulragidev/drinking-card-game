import Image from "next/image";

function Ad({ isLoading, prompt, onButtonClick }) {
  return (
    <div className="flex w-full md:w-3/4 bg-white h-24 flex-col mt-8 justify-center items-center">
      <div className="flex w-full h-24 justify-center">
        <Image
          src="/amazon-banner.png"
          alt="Sample Ad"
          layout="responsive"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
}

export default Ad;
