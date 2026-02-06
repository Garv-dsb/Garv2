import React from "react";

const RealEstateAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Theresa Webb",
      title: "Associate broker",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      title: "Associate broker",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ee792795000a45fc7731_team%20(1).png",
    },
    {
      id: 3,
      name: "Theresa Webb",
      title: "Associate broker",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1edfc489d43d06d7083e2_team.png",
    },
    {
      id: 4,
      name: "Bessie Cooper",
      title: "Associate broker",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ead4d11bf82e5bf88aa7_1%20(9).webp",
    },
  ];

  return (
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[20px] md:gap-[30px]">
            <div className="flex flex-col gap-[12px] md:gap-[16px]">
              <h3 className="text-[24px] sm:text-[32px] md:text-[42px] font-[400] text-[#2a2a2a] capitalize leading-[120%]">
                Real estate agents
              </h3>
              <p className="font-[400] text-[13px] sm:text-[14px] md:text-[16px] text-[#666]">
                Simple steps to buy, sell or rent your properties
              </p>
            </div>
            <button className="bg-white px-[16px] md:px-[24px] py-[10px] md:py-[12px] text-[13px] md:text-[16px] md:text-[18px] text-black border border-[#c2c7d0] rounded-[6px] md:rounded-[8px] flex flex-row items-center gap-[8px] cursor-pointer hover:bg-[#f8f8f8] transition-colors whitespace-nowrap">
              <p>View all</p>
              <img
                src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb832e4ae333057003daba_Vector%20(1).svg"
                alt="arrow"
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>

          <div className="flex flex-wrap gap-[20px] md:gap-[24px] lg:gap-[30px]">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="flex flex-col gap-[16px] md:gap-[20px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-22.5px)]"
              >
                <div className="overflow-hidden rounded-[8px] md:rounded-[12px] bg-[#f0f0f0]">
                  <img
                    className="object-cover w-full h-[250px] sm:h-[280px] md:h-[320px] "
                    src={agent.image}
                    alt={agent.name}
                  />
                </div>
                <div className="flex flex-col gap-[4px] md:gap-[6px]">
                  <p className="text-[16px] md:text-[18px] font-[600] text-[#2a2a2a]">
                    {agent.name}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-[#666]">
                    {agent.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RealEstateAgents;
