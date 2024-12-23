import React from "react";

function About() {
  const teamMembers = [
    {
      name: "Mercy Kharadi",
      role: "Co-Partner",
      description:
        "Mr. Deora is a first-generation entrepreneur who set up the business...",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Virendra Chaubey",
      role: "Co-Partner",
      description:
        "As the Managing Director of the company, Mr. Kartik Deora brings a wealth of experience...",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <div className="px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#184F75] mb-6">OVERVIEW</h2>
        <p className="mb-4">
          ALL PRODUCTS AND LABELS DETECTED ON RECENT PLAST WEBSITE MAY BE
          PROTECTED BY THIRD PARTIES...
        </p>
        <ul className="list-disc list-inside">
          <li>Entry Type: Pvt. Ltd Company</li>
          <li>Established: 2024</li>
          <li>Manufacturing Unit: Daman, Daman - India</li>
          <li>Office: Daman, Daman - India</li>
          {/* Add more details here */}
        </ul>
      </div>
      <div className="px-8 py-12 bg-white">
        <h2 className="text-3xl font-bold text-[#85C447] mb-6">TEAM</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-600">
                {member.role}
              </p>
              {/* <p className="text-gray-700 mt-2">{member.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
