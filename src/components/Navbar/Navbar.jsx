import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";
function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu= () => {
    menuRef.current.style.right='0';
  }
  const closeMenu= () => {
    menuRef.current.style.right='-350px';
  }


  return (
    <div className="flex items-center justify-between md:justify-around my-[20px] mx-[50px] md:mx-[170px] md:gap-[50px]">
      <div className="relative cursor-pointer">
        <h1 className="text-3xl font-extrabold font-Outfit"> Edwin </h1>
        <img
          className="absolute bottom-1 left-14 z-n1 w-10"
          src={theme_pattern}
          alt="logo"
        />
      </div>
      {/* menu open icon for mobile screens */}
      <img onClick={openMenu} className="block fixed right-[30px] md:hidden" src={menu_open} alt="menu icon" /> 
      <ul ref={menuRef} className="flex flex-col fixed items-start pl-[20px] top-0 right-[-350px] gap-[30px] bg-[#1F0016] w-[350px] h-[100%] z-[2] duration-[0.5s] list-none text-[16px] cursor-pointer md:flex-row md:gap-15 md:bg-transparent md:static md:items-center">
        {/* menu close icon for mobile screens */}
        <img onClick={closeMenu} className="block relative top-[30px] left-[290px] w-[30px] md:hidden" src={menu_close} alt="menu_close" /> 
        <li className="nav-menu">
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home </p>
          </AnchorLink>
          {menu === "home" ? (
            <img className="nav-menu-img" src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li className="nav-menu">
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p onClick={() => setMenu("about")}> About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img className="nav-menu-img" src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li className="nav-menu">
          <AnchorLink className="anchor-link" href="#services" offset={50}>
            <p onClick={() => setMenu("services")}> Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img className="nav-menu-img" src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li className="nav-menu">
          <AnchorLink className="anchor-link" href="#work" offset={50}>
            <p onClick={() => setMenu("work")}> My Work</p>
          </AnchorLink>
          {menu === "work" ? (
            <img className="nav-menu-img" src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li className="nav-menu">
          <AnchorLink className="anchor-link md:mr-6" href="#contact" offset={50}>
            <p onClick={() => setMenu("contact")}> Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img className="nav-menu-img" src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <div className="hidden  2xl:block p-5 rounded-50 bg-custom-gradient cursor-pointer text-[16px] transition duration-500 transform hover:scale-105">
        <AnchorLink className="anchor-link" href="#contact" offset={50}>
          Connect With Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
