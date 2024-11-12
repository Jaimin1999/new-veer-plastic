import React from 'react';
import { IconTruck, IconBuildingWarehouse, IconPackage, IconInbox } from '@tabler/icons-react';

const Section5 = () => {
  const services = [
    {
      title: 'CUSTOMIZED & TURNKEY PACKAGING SOLUTIONS',
      icon: <IconPackage size={48} />,
    },
    {
      title: 'OPEN ITEMS PACKAGING SOLUTIONS',
      icon: <IconBuildingWarehouse size={48} />,
    },
    {
      title: 'CUSTOMIZED INJECTION MOULDING SERVICES (TURNKEY)',
      icon: <IconPackage size={48} />,
    },
    {
      title: 'CUSTOM MOULDED PRODUCTS',
      icon: <IconInbox size={48} />,
    },
    {
      title: 'LOGISTICS',
      icon: <IconTruck size={48} />,
    },
  ];

  return (
    <div className="py-12 px-4 text-center bg-white">
      <p className="font-extrabold text-black text-4xl md:text-6xl uppercase">
        Industries<span className="text-[#184F75]"> We </span>Serve
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-[#184F75] rounded-2xl p-8 flex flex-col justify-around items-center transition duration-300 hover:bg-[#184F75] hover:text-white min-h-[14rem] shadow-md"
          >
            {service.icon}
            <p className="mt-4 text-xs font-normal">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
