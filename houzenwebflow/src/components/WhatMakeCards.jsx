import React from "react";

const WhatMakeCards = () => {
  const cardsData = [
    {
      id: 1,
      logoImage:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ce543b24bf37c6e188623a_%E5%9B%BE%E5%B1%82_x0020_1.svg",
      title: "Explore listings",
      description:
        "Discover properties handpicked to match your lifestyle and budget, guided by experienced real estate professionals.",
    },
    {
      id: 2,
      logoImage:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ce56f2e6d195deeee22d28_Frame%201215875544.svg",
      title: "Connect with experts",
      description:
        "Connect with experts to receive trusted guidance, valuable insights, and reliable solutions for all property needs.",
    },
    {
      id: 3,
      logoImage:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ce543b24bf37c6e188623a_%E5%9B%BE%E5%B1%82_x0020_1.svg",
      title: "Close the deals",
      description:
        "Close the deals smoothly with expert help, trusted support, and simplified steps for successful property transactions.",
    },
  ];
  return (
    <div className="flex flex-col gap-[20px] ">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-[20px] border-[1px] rounded-xl p-[20px]"
        >
          <img className="w-[40px]" src={card.logoImage} alt={card.title} />
          <h3 className="text-[22px] text-[#2a2a2a] capitalize">
            {card.title}
          </h3>
          <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[16px] font-[500]">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhatMakeCards;
