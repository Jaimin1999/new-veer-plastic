import React from "react";
import Image from "next/image";
import SampleBottle from "../../../assests/images/sampleBottle.png";

function Section3() {
  const items = [
    { title: "HDPE Bottles" },
    { title: "HDPE Containers" },
    { title: "Pesticides Bottles" },
    { title: "Detergent Bottles" },
    { title: "Nutraceuticals Jars" },
    { title: "Pumps" },
    { title: "Fliptop Caps" },
    { title: "Tablet Jars/Bottles" },
    { title: "Shampoo Bottles" },
    { title: "Laboratory Reagent Bottles" },
  ];

  return (
    <div className="bg-[#444444] py-10">
      <p className="text-center font-extrabold text-white text-4xl md:text-6xl">
        OUR PRODUCTS
      </p>
      <p className="text-center text-white text-sm md:text-base mt-2">
        WE OFFER AN ELABORATE SELECTION OF HIGH QUALITY STANDARDISED PRODUCTS.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-4">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#646464] rounded-2xl p-4 flex flex-col items-center"
            >
              <Image
                src={SampleBottle}
                height={100}
                width={50}
                alt="sample bottle img"
                className="mb-4"
              />
              <p className="text-white font-bold text-sm mb-4">{item.title}</p>
              <button className="bg-transparent text-white border border-white rounded-lg py-1 px-4 text-sm hover:bg-white hover:text-[#646464] transition duration-300">
                View
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section3;
