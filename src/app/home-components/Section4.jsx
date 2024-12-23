import React from "react";
import {
  IconTruck,
  IconBuildingWarehouse,
  IconPackage,
  IconInbox,
} from "@tabler/icons-react";

const Section4 = () => {
  const services = [
    {
      title: "CUSTOMIZED & TURNKEY PACKAGING SOLUTIONS",
      icon: <IconPackage size={48} />,
    },
    {
      title: "OPEN ITEMS PACKAGING SOLUTIONS",
      icon: <IconBuildingWarehouse size={48} />,
    },
    {
      title: "CUSTOMIZED INJECTION MOULDING SERVICES (TURNKEY)",
      icon: <IconPackage size={48} />,
    },
    {
      title: "CUSTOM MOULDED PRODUCTS",
      icon: <IconInbox size={48} />,
    },
    {
      title: "LOGISTICS",
      icon: <IconTruck size={48} />,
    },
  ];

  return (
    <div className="py-12 px-4 text-center bg-white">
      <p className="font-extrabold text-black text-4xl md:text-6xl uppercase">
        <span className="text-[#85C447]">Services</span> offered
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-[#85C447] rounded-2xl p-8 flex flex-col justify-around items-center transition duration-300 hover:bg-[#85C447] hover:text-white min-h-[14rem] shadow-md"
          >
            {service.icon}
            <p className="mt-4 text-[0.975rem] font-normal">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
