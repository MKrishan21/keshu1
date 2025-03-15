import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FindJob = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center py-16">
          <Image
            src="https://www.loopcv.pro/assets/images/others/loopcv-animation.gif"
            alt="job"
            width={300}
            height={500}
            unoptimized
          />
        </div>
        <div className="bg-black size-10 rounded-full border-4 absolute left-1/2 -translate-y-1/2"></div>
        <div className=" bg-[#E6EFF5] font-bold py-16 grid items-center justify-center gap-12">
          <h1 className="text-3xl lg:text-4xl text-center">
            Loopcv Helps You find a <br />
            job
          </h1>
          <section className="flex justify-center">
            <Button className="w-1/2">Join Keshoo Community</Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default FindJob;
