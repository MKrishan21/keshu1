import React from "react";
import { Steps, WorkCard } from "@/component/mock";

const StepsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center min-h-screen">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
        How Loopcv Works In 3 Simple Steps
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        The process of finding a job is complicated and time-consuming. Hundreds
        of tools, a lot of copy-pasting. We have designed a unique process to
        allow anyone to get a job faster with minimum effort using AI.
      </p>

      {/* Steps */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
        {Steps.map(({ step, text }) => (
          <div key={step} className="flex flex-col items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white text-xl font-bold rounded-full">
              {step}
            </div>
            <p className="mt-3 text-gray-700 max-w-xs">{text}</p>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {WorkCard.map(({ title, description }) => (
          <div
            key={title}
            className="w-full bg-white p-6 shadow-md rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 mt-3 min-h-[100px]">{description}</p>
            <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
export default StepsSection;
