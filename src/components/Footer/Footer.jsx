import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className="flex flex-col gap-8 py-20 px-6 sm:px-12 lg:px-32 w-full">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col items-start text-left w-full lg:w-1/2">
          <div className="relative">
            <h1 className="text-3xl font-extrabold font-Outfit">Edwin</h1>
            <img
              className="absolute bottom-1 left-20 lg:left-16 w-10"
              src={theme_pattern}
              alt="theme pattern"
            />
          </div>
          <p className="text-[16px] max-w-xs md:max-w-md lg:max-w-lg">
            I am a skilled fullstack application developer based in Nairobi,
            Kenya. I provide tailored web solutions combining front-end and
            back-end expertise to deliver high-quality projects.
          </p>
        </div>

        {/* Right Section - Email Input and Subscribe Button */}
        <div className="flex justify-end items-center w-full lg:w-1/2 gap-4">
          <div className="flex items-center gap-4 px-4 py-3 bg-[#32323b] rounded-full hover:border-2 hover:border-white transition-all w-full max-w-md">
            <img src={user_icon} alt="user icon" />
            <input
              className="outline-none border-none bg-transparent placeholder-gray-400 text-white font-Outfit text-lg w-full"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <button className="py-3 px-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-[16px] font-semibold text-white transition-transform duration-300 hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-t border-gray-700 w-full mt-8" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[14px] md:text-[16px] gap-4 text-center sm:text-left w-full">
        <p>&copy; 2024 Edwin Mugo. All rights reserved</p>
        <div className="flex gap-8">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
