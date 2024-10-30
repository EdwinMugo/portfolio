import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';


function Services() {
    return (
      <section id="services" className="flex flex-col items-center gap-8 text-white py-4 px-8 md:px-24 lg:px-40">
        {/* Title Section with Theme Pattern */}
        <div className="relative text-center my-4 mx-0 md:mx-auto">
          <h1 className="text-[40px] md:text-[60px] font-medium md:text-5xl md:font-semibold">My Services</h1>
          <img className="absolute bottom-0 right-0 transform translate-y-3 z-n1" src={theme_pattern} alt="theme pattern" />
        </div>
  
        {/* Services Grid */}
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 p-8 md:gap-8">
          {Services_data.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 p-6 md:p-8 rounded-lg border-2 border-white cursor-pointer transition duration-300 hover:border-[#ff00ff] hover:bg-service-format-gradient hover:scale-105"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{service.s_no}</h3>
              <h2 className="text-2xl md:text-3xl font-extrabold services-gradient truncate">{service.s_name}</h2>
              <p className="text-white text-base md:text-[20px] leading-6 overflow-hidden break-words">
                {service.s_desc}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-[16px] md:text-[20px]">Read More</p>
                <img src={arrow_icon} alt="arrow icon" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;


