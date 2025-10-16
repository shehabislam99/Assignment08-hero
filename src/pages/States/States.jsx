import React from "react";

const States = () => {
  const state = [
    {
      heading: "Total Downloads",
      number: "29.6M",
      label: "21% more than last month",
    },
    {
      heading: "Total Reviews",
      number: "906K",
      label: "46% more than last month",
    },
    {
      heading: "Active Apps",
      number: "132+",
      label: "31 more will Launch",
    },
  ];

  return (
    <div className="text-white py-16 bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">
      <h1 className="font-bold text-[48px] mb-2 text-center">
        Trusted by Millions, Built for You
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {state.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg shadow-md transition-shadow"
            >
              {" "}
              <div className="text-[16px]">{stat.heading}</div>
              <div className="text-[64px]  font-extrabold ">{stat.number}</div>
              <div className="text-[16px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default States;
