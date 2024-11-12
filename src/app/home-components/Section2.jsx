import React from "react";
import { IconBulb } from "@tabler/icons-react";

export default function Section2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-10 p-10">
      <SustainableCard />
      <SustainableCard />
      <SustainableCard />
      <SustainableCard />
    </div>
  );
}

const SustainableCard = () => {
  return (
    <div className="bg-[#184F75] text-white text-center rounded-xl p-5 transition-transform duration-300 hover:bg-[#85C447] hover:scale-105 cursor-pointer">
      <div className="flex justify-center items-center mb-4">
        <IconBulb size={50} className="text-white" />
      </div>
      <h5 className="text-2xl font-semibold mb-2">SUSTAINABLE INNOVATIONS</h5>
      <p className="text-base">
        LONG TERM ENVIRONMENTAL, SOCIAL AND ECONOMIC BENEFITS.
      </p>
    </div>
  );
};
