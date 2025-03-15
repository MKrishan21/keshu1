import Image from "next/image";
import React from "react";

const Create = () => {
  return (
    <div className="grid items-center justify-center gap-10 bg-gray-100 py-16 px-6 text-center overflow-hidden">
      <section className="flex flex-col gap-4">
        <p className="text-[#9ba4b4]">Just a few quick steps</p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Create your loops easily and quickly
        </h1>
        <p className="text-xs">
          Add your desired job titles and locations. Loopcv will search accross
          multiple platforms to find jobs related to your preferences
        </p>
      </section>
      <section className="flex items-center justify-center">
        <Image
          src="https://www.loopcv.pro/assets/images/others/loop%20cv%20video.gif"
          alt="dash"
          width={600}
          height={300}
          unoptimized
        />
      </section>
      
    </div>
  );
};

export default Create;
