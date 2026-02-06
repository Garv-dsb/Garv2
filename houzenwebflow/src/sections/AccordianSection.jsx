import React, { useState } from "react";

const AccordianSection = () => {
  const [expandedItem, setExpandedItem] = useState();
  const items = [
    {
      id: 1,
      title: "Exterior Design",
      subtitle: "Modern Facades",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      description:
        "Our exterior design focuses on creating visually appealing, durable facades. Each project blends aesthetics with practicality, offering timeless beauty that enhances property value while providing a welcoming impression for residents.",
    },
    {
      id: 2,
      title: "Estate Development",
      subtitle: "Strategic Growth",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      description:
        "We develop comprehensive estate plans that maximize land potential. Our strategic approach ensures sustainable growth, community integration, and long-term profitability for investors.",
    },
    {
      id: 3,
      title: "Construction Building",
      subtitle: "Quality Craftsmanship",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      description:
        "Our construction team delivers excellence through meticulous planning and expert execution. We use premium materials and modern techniques to ensure every project exceeds industry standards.",
    },
    {
      id: 4,
      title: "Architecture & Design",
      subtitle: "Innovative Spaces",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      description:
        "We create innovative spaces that balance functionality with beauty. Our architectural designs reflect modern trends while maintaining timeless appeal and optimal user experience.",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-[40px] md:gap-[60px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[20px] md:gap-[30px]">
        <h2 className="text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-[700] max-w-[500px]">
          We Develop Quality Real Estate Projects
        </h2>
        <button className="bg-white text-black px-[20px] sm:px-[24px] py-[12px] sm:py-[14px] rounded-[6px] text-[13px] sm:text-[14px] md:text-[15px] font-[600] flex items-center gap-[8px] whitespace-nowrap hover:bg-gray-100 transition-colors">
          Check all projects <span>→</span>
        </button>
      </div>
      <div className="flex flex-col gap-[15px] gap-[50px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="border-b-[1px] border-[#d0d5dd4d] overflow-hidden "
          >
            <button
              onClick={() =>
                setExpandedItem(expandedItem === index ? -1 : index)
              }
              className="w-full  pb-[20px]  hover:bg-[#2a2a2a] transition-colors flex justify-between items-center "
            >
              <span className="text-white text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-[500] min-w-[40px] text-left">
                {String(item.id).padStart(2, "0")}
              </span>
              <h3 className="text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] font-[600] text-left flex-1 px-[12px] sm:px-[20px]">
                {item.title}
              </h3>

              <span
                className={`text-white text-[18px] sm:text-[20px] md:text-[24px] flex-shrink-0 border border-white rounded-full w-[40px] sm:w-[44px] md:w-[50px] h-[40px] sm:h-[44px] md:h-[50px] flex items-center justify-center ${
                  expandedItem === index ? "rotate-90" : ""
                }`}
              >
                →
              </span>
            </button>

            {expandedItem === index && (
              <div className="p-[16px] md:p-[20px] lg:p-[30px] border-t border-[#333]">
                <div className="flex flex-col gap-[24px] md:gap-[30px] lg:gap-[40px]">
                  <div className="flex flex-col gap-[8px]">
                    <h3 className="text-white text-[18px] md:text-[24px] lg:text-[32px] font-[700]">
                      {item.subtitle}
                    </h3>
                  </div>
                  <div className="w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[430px] object-cover rounded-[12px]"
                    />
                  </div>

                  <div className="w-full flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] lg:justify-between">
                    <p className="text-[#ccc] text-[13px] md:text-[14px] lg:text-[16px] leading-[160%] flex-1">
                      {item.description}
                    </p>

                    <button className="bg-white text-black px-[20px] md:px-[24px] py-[12px] md:py-[14px] rounded-[6px] text-[12px] md:text-[13px] lg:text-[14px] font-[600] w-fit flex items-center gap-[8px] hover:bg-gray-100 transition-colors flex-shrink-0">
                      View details <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordianSection;
