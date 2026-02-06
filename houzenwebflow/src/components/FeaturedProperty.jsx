import React, { useState } from "react";

const FeaturedProperty = () => {
  const [activeCategory, setActiveCategory] = useState("Luxury");

  const categories = ["Luxury", "Modern", "Classic", "Urban"];

  const properties = {
    Luxury: {
      price: "$1,024",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      floorPlans: [
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      ],
    },
    Modern: {
      price: "$950",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      floorPlans: [
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      ],
    },
    Classic: {
      price: "$850",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      floorPlans: [
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      ],
    },
    Urban: {
      price: "$1,200",
      image:
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
      floorPlans: [
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd32784262aadf1c8cfe7_Frame%201215875526.webp",
        "https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cbd2850ff4c0c36a68dd68_Frame%201215875527.webp",
      ],
    },
  };

  return (
    <div className="bg-white px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="flex flex-col gap-[40px] md:gap-[60px]">
        <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[40px] lg:gap-[60px]">
          <div className="w-full lg:w-[45%] flex flex-col justify-center gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[700] text-[#1a1a1a] leading-[120%]">
                Our Featured Property
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#666] leading-[160%]">
                Our mission is to provide a seamless and user-friendly
                experience for individuals and families searching for their
                dream home.
              </p>
            </div>

            <div className="flex flex-wrap gap-[12px]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[6px] text-[13px] md:text-[14px] font-[600] transition-all ${
                    activeCategory === category
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-[#f0f0f0] text-[#1a1a1a] hover:bg-[#e0e0e0]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Property Image */}
          <div className="w-full lg:w-[55%] relative">
            <div className="relative rounded-[12px] overflow-hidden">
              <img
                src={properties[activeCategory].image}
                alt={activeCategory}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Price Badge */}
              <div className="absolute top-[20px] right-[20px] bg-white px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] shadow-lg">
                <p className="text-[14px] md:text-[16px] font-[600] text-[#1a1a1a]">
                  {properties[activeCategory].price}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floor Plans Section */}
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[20px] md:text-[24px] font-[600] text-[#1a1a1a]">
            Floor Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[20px]">
            {properties[activeCategory].floorPlans.map((plan, index) => (
              <div
                key={index}
                className="rounded-[12px] overflow-hidden bg-[#f0f0f0]"
              >
                <img
                  src={plan}
                  alt={`Floor Plan ${index + 1}`}
                  className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
