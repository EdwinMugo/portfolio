import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

function Contact() {
    const [result, setResult] = useState("");

    const emailSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "f3021a5a-5e66-4cfd-b279-b95b5d310e9d");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        alert('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-10 my-20 px-4 sm:px-8 lg:px-8"
    >
      {/* Title Section */}
      <div className="relative">
        <h1 className="py-0 px-4 text-3xl md:text-5xl lg:text-6xl font-semibold">
          Get in touch
        </h1>
        <img
          className="absolute bottom-0 right-0 z-n1"
          src={theme_pattern}
          alt="theme pattern"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full max-w-5xl ">
        {/* Left Section: Contact Information */}
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-[35px] md:text-[50px] font-bold contact-gradient">
            Let's talk
          </h1>
          <p className="text-[16px] leading-7 max-w-md">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on. You can
            contact me anytime.
          </p>
          <div className="flex flex-col gap-5 text-base">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={mail_icon} alt="mail icon" />
              <p>edwinmurgoh@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={call_icon} alt="call icon" />
              <p>+254702516002</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={location_icon} alt="location icon" />
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          onSubmit={emailSubmit}
          className="flex flex-col items-start gap-5 w-full lg:max-w-lg"
        >
          <label className="text-base font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full p-3 text-base rounded-md bg-[#32323c] placeholder-gray-400 text-white"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label className="text-base font-medium" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full p-3 text-base rounded-md bg-[#32323c] placeholder-gray-400 text-white"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label className="text-base font-medium" htmlFor="message">
            Write your message here
          </label>
          <textarea
            className="w-full h-40 p-3 text-base rounded-md bg-[#32323c] placeholder-gray-400 text-white"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>

          <button
            className="mt-4 py-3 px-6 w-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold text-white transition-transform duration-300 hover:scale-105"
            type="submit"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
