import React from "react";

const HotelCard = ({mainImage,title,description}) => {
  return (
    <div className="bg-white rounded-lg w-[48%] shadow-md">
      <div>
        <img
          className="w-[100%] min-w-[319px] object-cover rounded-t-sm"
          src={mainImage}
        />
      </div>
      <div className="p-[20px] flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-[14px] font-[500]">{title}</p>
          <h3 className="capitalize text-[22px] ">{description}</h3>
        </div>
        <div className="pt-[20px] border-[#d9d9d9] border-t-[1px] flex justify-between">
          <div className="flex gap-[20px]">
            <div className="flex gap-[10px]">
              <img
                className="w-[24px]"
                src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68ce1ed7ca5dda078e8f5c5b_Bathtub.svg"
              />
              <div className="text-[16px] text-[#666] ">3-4</div>
            </div>
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[24px]"
                src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68e77ba69547293c071e5833_u_home-alt.svg"
              />
              <div className="text-[16px] text-[#666]">1250sqft</div>
            </div>
          </div>
          <h3 className="text-[22px] text-[#2a2a2a] font-[600] ">$1,024</h3>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
