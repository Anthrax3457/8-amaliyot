import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    
    <header id="header" className="h-[12rem] mx-auto pl-[4%] pr-[8%] text-center pt-[79.8%] grid md:flex md:justify-between md:pr-[30px] md:pl-4 lg:pl-[4.9%] lg:pr-[8%] xl:pl-[3.9%] xl:pr-[6%]">
      <div className="flex items-center gap-[9px] mt-[345px]  md:mt-[3.7rem] lg:mt-[-9.6rem] xl:mt-[-9.79rem] justify-start"> 
        <img className="md:mt-[12px]" src="img/simple-house-logo.png" alt="" />
        <div className="grid items-center  text-start">
          <p className="text-white text-[2.4rem] font-normal mb-[0px] tracking-[-0.020em] leading-[1.3] md:leading-[1.4]">Simple House</p>
          <p className="text-white text-[1.2rem] lg:tracking-[-0.01em]">new restaurant template</p>
        </div>
      </div>
      <ul className="site-menu__list flex justify-end mt-[1.2rem] gap-[1.7rem] md:gap-[1.8rem] md:mt-[8rem] lg:mt-[-5.4rem] lg:gap-[3.1rem] xl:gap-[3.2rem]">
        <li className="site-menu__item">
          <Link
            to="/"
            className={`site-menu__link ${location.pathname === "/" ? "text-[1.14rem] lg:text-[1.05rem] text-white  underline underline-offset-[13px] " : "no-underline text-white text-[1.14rem] lg:text-[1.05rem]"
              }`}
          >
            Home
          </Link>
        </li>
        <li className="site-menu__item">
          <Link
            to="about"
            className={`site-menu__link ${location.pathname === "/about" ? "text-[1.14rem] lg:text-[1.05rem] text-white  underline underline-offset-[13px] " : "no-underline text-white text-[1.14rem] lg:text-[1.05rem]"
              }`}
          >
            About
          </Link>
        </li>

        <li className="site-menu__item">
          <Link
            to="contact"
            className={`site-menu__link ${location.pathname === "/contact" ? "text-[1.14rem] lg:text-[1.05rem] text-white  underline underline-offset-[13px] " : "no-underline text-white text-[1.14rem] lg:text-[1.05rem]"
              }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
