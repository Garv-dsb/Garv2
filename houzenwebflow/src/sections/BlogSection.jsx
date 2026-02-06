import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "October 5, 2025",
      title: "Make Your Home Irresistible With These Staging Tricks",
      description:
        "Whether you are searching for your dream home, planning an investment, or listing a property for sale",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e12c8d4c60e2add224f2f5_c9ad82b24647bd1d344423304298c91ce238539f.webp",
    },
    {
      id: 2,
      date: "October 3, 2025",
      title: "Smart Investments in Real Estate",
      description:
        "Learn how to make intelligent property investment decisions",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1c682715f79d3ce81bf91_1%20(3).webp",
    },
    {
      id: 3,
      date: "October 1, 2025",
      title: "Modern Home Design Trends",
      description:
        "Discover the latest design trends in residential architecture",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1c6adcf566080a19bc104_1%20(4).webp",
    },
    {
      id: 4,
      date: "September 28, 2025",
      title: "Property Market Analysis 2025",
      description: "Comprehensive overview of the current real estate market",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1c6d4450006447a9a235e_1%20(5).webp",
    },
  ];
  return (
    <div className="container mx-auto flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-[20px] md:gap-[30px]">
        <div className="flex flex-col gap-[12px] md:gap-[16px]">
          <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-[600] text-[#2a2a2a] leading-[120%]">
            Blogs & Insights
          </h2>
          <p className="font-[400] text-[13px] sm:text-[14px] md:text-[16px] text-[#666]">
            Simple steps to buy, sell or rent your properties
          </p>
        </div>
        <button className="bg-white px-[16px] md:px-[20px] py-[10px] md:py-[12px] text-[13px] md:text-[14px] md:text-[16px] text-black border border-[#c2c7d0] rounded-[6px] md:rounded-[8px] flex flex-row items-center gap-[8px] cursor-pointer hover:bg-[#f8f8f8] transition-colors whitespace-nowrap">
          <p>View all</p>
          <img
            src="https://cdn.prod.website-files.com/68ca7130feb656001a9ecc33/68cb832e4ae333057003daba_Vector%20(1).svg"
            alt="arrow"
            className="w-[16px] h-[16px]"
          />
        </button>
      </div>

      <div className="flex flex-col gap-[30px] md:gap-[40px]">
        <div className="flex flex-wrap gap-[15px] sm:gap-[18px] md:gap-[17px] lg:gap-[24px]">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-[12px] md:gap-[16px] w-full sm:w-[calc(50%-9px)] lg:w-[calc(25%-18px)]"
            >
              <div className="relative rounded-[8px] md:rounded-[12px] overflow-hidden h-[200px] sm:h-[220px] md:h-[240px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col gap-[8px] md:gap-[12px]">
                <p className="text-[11px] md:text-[12px] md:text-[13px] text-[#666] font-[500]">
                  {blog.date}
                </p>

                <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] text-[#2a2a2a] leading-[130%] min-h-[50px]">
                  {blog.title}
                </h4>

                <p className="text-[12px] md:text-[13px] md:text-[14px] text-[#666] leading-[150%] line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
