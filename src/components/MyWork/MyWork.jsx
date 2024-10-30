import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  return (
    <div
      id="work"
      className="flex flex-col items-center justify-center gap-20 my-20 px-8 md:px-24 lg:px-40"
    >
      {/* Title Section */}
      <div className="relative mb-10">
        <h1 className="px-4 text-[40px] md:text-[60px] leading-tight md:text-5xl lg:text-6xl font-semibold whitespace-nowrap">
          Latest Work
        </h1>
        <img
          className="absolute bottom-0 right-0 z-n1"
          src={theme_pattern}
          alt="theme pattern"
        />
      </div>

      {/* Work Grid */}
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 w-full">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="relative box-border transition duration-300 cursor-pointer hover:scale-105 hover:border-4 hover:border-[#ff00ff] hover:rounded-lg"
          >
            <img
              className="w-full h-[280px] object-cover rounded-lg"
              src={work.w_img}
              alt="project image"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center gap-3 md:gap-5 rounded-full border-2 border-white py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 text-base md:text-lg lg:text-xl font-medium transition duration-300 cursor-pointer hover:gap-6 hover:bg-[#ff00ff]">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
}

export default MyWork;
