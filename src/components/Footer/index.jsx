import React from "react";

// styles
import "./style.css";

const Footer = () => {
  return (
    <div className="xl:flex  xl:items-center xl:justify-center">
      <footer
        id="footer"
        className="flex bg-white xl:w-[88%] h-[150px] items-center justify-center text-center"
      >
        <p className="text-[17.3px] pt-[40px] tracking-[0.021em] leading-[1.8] md:pt-[0px] lg:mt-[4px] xl:mt-[20px] text-[#626364] ">Copyright © 2020 Simple House | Design: TemplateMo</p>
      </footer>
    </div>
  );
};

export default Footer;
