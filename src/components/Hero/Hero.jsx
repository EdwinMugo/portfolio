import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center gap-9" id='home'>
        <img className="mt-[120px] w-[240px] h-[247px] md:w-[350px] lg:w-[400px] md:mt-65" src={profile_img} alt="profile" /> 
        <h1 className="text-center font-medium md:font-semibold mt-[5px] w-[90%] text-[35px] md:text-[65px] leading-[70px] lg:leading-[65px] lg:w-3/4 lg:text-[60px] ">
          <span className="gradient-text">I'm Edwin Mugo </span>, Frontend developer based in Nairobi
        </h1>
        <p className="w-3/4 text-center text-[16px] leading-[25px] md:text-[18px] md:leading-[30px] my-0 mx-[10px] lg:w-1/2">
          I am a freelance fullStack developer, with 4+ years of experience.
          Working alongside global teams, I have honed my skills in various
          technologies, including React, Node.js, Express.js, and PostgreSQL. 
        </p>
        <div className="flex items-center gap-[16px] font-medium text-[14px] md:text-[16px] leading-normal md:gap-6 md:font-semibold mb-4"> 
            <div className=" py-4 px-[30px] md:py-6 md:px-11 rounded-[40px] md:rounded-50 bg-button-gradient cursor-pointer hover:border-2 border-white"> <AnchorLink className="anchor-link" href="#contact" offset={50} >Connect with Me </AnchorLink></div>
            <div className="py-4 px-10 rounded-[40px] md:py-6 md:px-14 Md:rounded-50 border-2 border-white hover:border-custom-purple "> My Resume</div>
        </div>
        </div>
        
        
      
      
    </div>
  );
}

export default Hero;
//