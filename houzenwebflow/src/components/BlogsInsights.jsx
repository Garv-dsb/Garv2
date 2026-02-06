import React from "react";

const BlogsInsights = () => {
  const blogs = [
    {
      id: 1,
      date: "October 5, 2025",
      title: "Make Your Home Irresistible With These Staging Tricks",
      description:
        "Whether you are searching for your dream home, planning an investment, or listing a property for sale",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e12c8d4c60e2add224f2f5_c9ad82b24647bd1d344423304298c91ce238539f.webp",
      author: "Donald Joe",
      role: "Senior housing consultant",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1eefc06d641fb7ce251aa_team%20(2).png",
      isFeatured: true,
    },
    {
      id: 2,
      date: "October 3, 2025",
      title: "Smart Investments in Real Estate",
      description: "Learn how to make intelligent property investment decisions",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ee792795000a45fc7731_team%20(1).png",
      author: "Sarah Chen",
      role: "Investment Advisor",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ee792795000a45fc7731_team%20(1).png",
      isFeatured: false,
    },
    {
      id: 3,
      date: "October 1, 2025",
      title: "Modern Home Design Trends",
      description: "Discover the latest design trends in residential architecture",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1edfc489d43d06d7083e2_team.png",
      author: "Michael Park",
      role: "Design Expert",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1edfc489d43d06d7083e2_team.png",
      isFeatured: false,
    },
    {
      id: 4,
      date: "September 28, 2025",
      title: "Property Market Analysis 2025",
      description: "Comprehensive overview of the current real estate market",
      image:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ead4d11bf82e5bf88aa7_1%20(9).webp",
      author: "Emma Wilson",
      role: "Market Analyst",
      avatar:
        "https://cdn.prod.website-files.com/68ce0b6acf3842139fd99c12/68e1ead4d11bf82e5bf88aa7_1%20(9).webp",
      isFeatured: false,
    },
  ];

  const featuredBlog = blogs.find((blog) => blog.isFeatured);
  const otherBlogs = blogs.filter((blog) => !blog.isFeatured);

  return (
    <div className="px-[20px] sm:px-[30px] md:px-[40px] lg:px-[60px] py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
        {/* Header Section */}
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

        {/* Featured and Other Blogs */}
        <div className="flex flex-col gap-[30px] md:gap-[40px]">
          {/* Featured Blog */}
          {featuredBlog && (
            <div className="flex flex-col lg:flex-row gap-[20px] md:gap-[30px]">
              {/* Featured Image */}
              <div className="w-full lg:w-[45%]">
                <div className="relative rounded-[12px] overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Featured Content */}
              <div className="w-full lg:w-[55%] flex flex-col justify-center gap-[16px] md:gap-[20px]">
                <div className="flex items-center gap-[8px] text-[#666]">
                  <span className="text-[12px] md:text-[13px]">📅</span>
                  <p className="text-[12px] md:text-[13px] md:text-[14px] font-[500]">
                    {featuredBlog.date}
                  </p>
                </div>

                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#2a2a2a] leading-[130%]">
                  {featuredBlog.title}
                </h3>

                <p className="text-[13px] md:text-[14px] md:text-[15px] text-[#666] leading-[160%]">
                  {featuredBlog.description}
                </p>

                {/* Author */}
                <div className="flex items-center gap-[12px] md:gap-[16px] pt-[12px] md:pt-[16px]">
                  <img
                    src={featuredBlog.avatar}
                    alt={featuredBlog.author}
                    className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-[2px] md:gap-[4px]">
                    <p className="text-[14px] md:text-[15px] md:text-[16px] font-[600] text-[#2a2a2a]">
                      {featuredBlog.author}
                    </p>
                    <p className="text-[12px] md:text-[13px] md:text-[14px] text-[#666]">
                      {featuredBlog.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Blogs Grid */}
          <div className="flex flex-wrap gap-[15px] sm:gap-[18px] md:gap-[20px] lg:gap-[24px]">
            {otherBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col gap-[12px] md:gap-[16px] w-full sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Blog Image */}
                <div className="relative rounded-[8px] md:rounded-[12px] overflow-hidden h-[200px] sm:h-[220px] md:h-[240px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
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

                  {/* Author Mini */}
                  <div className="flex items-center gap-[8px] md:gap-[12px] pt-[8px] md:pt-[12px]">
                    <img
                      src={blog.avatar}
                      alt={blog.author}
                      className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-[1px] md:gap-[2px]">
                      <p className="text-[12px] md:text-[13px] font-[600] text-[#2a2a2a]">
                        {blog.author}
                      </p>
                      <p className="text-[10px] md:text-[11px] md:text-[12px] text-[#999]">
                        {blog.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsInsights;