import React from "react";

const ClientsReview = () => {
  const reviews = [
    {
      id: 1,
      rating: "★★★",
      title: "REVIEWS",
      text: "Selling my home felt intimidating at first, but the entire process was handled smoothly. I appreciated the guidance and the responsibly fostered opacity backed",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 2,
      rating: "★★★★",
      title: "REVIEWS",
      text: "I never thought staging could make such a difference, yet the right advice brought in serious buyers almost instantly.",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 3,
      rating: "★★★",
      title: "REVIEWS",
      text: "What seemed like a complicated sale turned out to be a beautifully smooth experience thanks to the team's expertise and dedication.",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 4,
      rating: "★★★★★",
      title: "REVIEWS",
      text: "The professionalism and attention to detail were outstanding. I felt supported every step of the way.",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 5,
      rating: "★★★★",
      title: "REVIEWS",
      text: "From listing to closing, the process was transparent and efficient. I highly recommend their services.",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
    {
      id: 6,
      rating: "★",
      title: "REVIEWS",
      text: "Their market knowledge and negotiation skills were impressive. I felt confident throughout the entire selling process.",
      author: "Julian T. Beaumond",
      role: "Customer",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
      <div className="flex flex-col gap-[20px] md:gap-[24px] text-center">
        <div className="flex flex-col gap-[8px] md:gap-[12px]">
          <h2 className="text-white text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-[600] leading-[120%]">
            Trusted By Thousand Of People And Company
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[8px] md:gap-[12px]">
            <p className="text-[#999] text-[13px] md:text-[14px] font-[500]">
              4.2/5
            </p>
            <span className="text-[#ffa500] text-[14px]">★</span>
            <p className="text-[#999] text-[13px] md:text-[14px] font-[500]">
              Trustpilot (Based on 5,108 reviews)
            </p>
          </div>
        </div>
        <h3 className="text-[#666] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-[600] opacity-30">
          Clients Review
        </h3>
      </div>

      <div className="flex flex-wrap gap-[20px] md:gap-[24px] lg:gap-[30px]">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col gap-[16px] md:gap-[20px] p-[20px] md:p-[24px] bg-[#242424] rounded-[12px] border border-[#333] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-20px)]"
          >
            <div className="flex gap-[6px] text-[#ffa500]">{review.rating}</div>

            <p className="text-[#999] text-[11px] md:text-[12px] font-[600] uppercase tracking-wider">
              {review.title}
            </p>

            <p className="text-[#ccc] text-[13px] md:text-[14px] md:text-[15px] leading-[160%] flex-grow">
              {review.text}
            </p>

            <div className="flex items-center gap-[12px] md:gap-[16px] pt-[12px] md:pt-[16px] border-t border-[#333]">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-[2px] md:gap-[4px]">
                <p className="text-white text-[14px] md:text-[15px] font-[600]">
                  {review.author}
                </p>
                <p className="text-[#999] text-[12px] md:text-[13px] font-[500]">
                  {review.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsReview;
