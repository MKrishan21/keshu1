import Image from "next/image";
import React from "react";

const StatisticsSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#E6EFF5] py-16 px-6 flex flex-col gap-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left div - Text Content */}
          <div className="text-left">
            <p className="text-gray-600 font-semibold">
              All your job searches in one place
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Check statistics for your searches (loops)
            </h2>
            <p className="text-gray-700 mt-4 max-w-md">
              With advanced filters, keyword search, company exclusion, and much
              more, Loopcv gives you the opportunity to automatically apply only
              to jobs that you really like.
            </p>
          </div>

          {/* Right div - Dashboard UI */}
          <div>
            <Image
              src="https://www.loopcv.pro/assets/images/screens/shapes.webp"
              alt="dash"
              width={800}
              height={600}
              unoptimized
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Right div - Dashboard UI */}
          <div>
            <Image
              src="https://www.loopcv.pro/assets/images/screens/shapes.webp"
              alt="dash"
              width={800}
              height={600}
              unoptimized
            />
          </div>
          {/* Left div - Text Content */}
          <div className="text-left">
            <p className="text-gray-600 font-semibold">
              All your job searches in one place
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
              Check statistics for your searches (loops)
            </h2>
            <p className="text-gray-700 mt-4 max-w-md">
              With advanced filters, keyword search, company exclusion, and much
              more, Loopcv gives you the opportunity to automatically apply only
              to jobs that you really like.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsSection;
