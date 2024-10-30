import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const skills = [
  { name: "Express JS", width: "w-4/5" },
  { name: "Node JS", width: "w-3/4" },
  { name: "React JS", width: "w-[90%]" },
  { name: "JavaScript", width: "w-[80%]" },
  { name: "PostgreSQL", width: "w-[60%]" },
  { name: "Tailwind CSS", width: "w-[80%]" },
];

const achievements = [
  { value: "4+", label: "YEARS OF EXPERIENCE" },
  { value: "30+", label: "PROJECTS COMPLETED" },
  { value: "15+", label: "HAPPY CLIENTS" },
];


const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-[70px] text-white py-16 px-8 md:px-24 lg:px-40"
    >
      {/* heading with pattern */}
      <div className="relative"> 
      <h1 className="py-0 px-0 md:px-7 font-medium text-[40px] md:font-semibold md:text-extra-large">
          About Me
        </h1>
        <img
          className="absolute bottom-0 right-0 z-n1"
          src={theme_pattern}
          alt="theme-pattern"
        />

      </div>
      

      <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 lg:space-x-16 items-center md:items-start">
        {/* Left Image Container */}
        <div className="w-60 h-80 md:w-80 md:h-[30rem] rounded-lg overflow-hidden">
          <img
            src={profile_img}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Description & Skills */}
        <div className="mt-8 md:mt-0 md:flex-1 space-y-6 text-center md:text-left">
          <p className="text-lg leading-normal">
          I am a skilled FullStack Developer with over four years of
                professional experience. My expertise spans both front-end and
                back-end technologies, allowing me to create robust, end-to-end
                user-friendly applications that meet diverse business needs.

          </p>
          <p className="text-lg leading-normal">
          I thrive on the challenge of creating seamless user experiences
                while ensuring robust back-end functionality. This dual focus
                allows me to deliver comprehensive solutions that drive
                innovation and efficiency.

          </p>

          {/* Skill Bars */}
          <div className="space-y-3 mt-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-[16px] md:text-[20px] font-medium w-24">
                  {skill.name}
                </span>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div
                    className={`${skill.width} h-full bg-gradient-to-r from-purple-500 to-orange-500 rounded-full`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex w-full justify-between md:justify-around mb-20 items-center space-x-8 md:space-x-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center">
                {/* Achievement Content */}
                <div className="flex flex-col items-center gap-2 transition duration-500">
                  <h1 className="text-[28px] md:text-[40px] font-semibold achievements-gradient">
                    {achievement.value}
                  </h1>
                  <p className=" text-[12px] text-center md:text-[18px] font-medium">{achievement.label}</p>
                </div>

                {/* Vertical Divider */}
                {index < achievements.length - 1 && (
                  <div className="border-l-2 border-white h-24 mx-4 md:mx-8"></div>
                )}
              </div>

        ))}
      </div>
    </section>
  );
};

export default About;
