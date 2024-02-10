import React from "react";
// styles
import "./style.css";
// images 
import img1 from '../../../public/img/img-01.jpg'
// components
import Filter from "./filter";


const Home = () => {
  return (
    <div className="xl:flex xl:flex-col xl:items-center">
      <section className="bg-white w-full h-full flex xl:w-[88%] flex-col justify-center items-center">
        <div className="w-[330px] md:w-[90%] flex flex-col items-center text-center justify-center">
          <p className="text-[2rem] font-normal pt-[60px] tracking-wide leading-[1.4]">Welcome to Simple House</p>
          <p className="text-[#626364] mt-[30px] text-[18px] leading-[1.7] tracking-normal md:w-[94%] lg:w-[70%] xl:w-[60%]">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
        </div>
        <Filter />
        <div className="px-[1rem] mt-[140px] grid md:flex md:justify-center md:items-start items-start text-start justify-center md:mt-[145px] lg:mt-[140px]  md:gap-[2.5rem] lg:gap-[2.2rem] xl:gap-[1.9rem]">
          <img className="md:w-[350px] md:ml-[-45px] lg:w-[480px] lg:ml-[-33px] xl:w-full xl:ml-[-42px] " src={img1} alt="" />
          <div className="">
            <p className='text-[1.4rem] font-normal text-[#1A6692] tracking-[-0.01em] mt-[36px] md:mt-0'>Maecenas nulla neque</p>
            <p className="mt-[13.3px] md:mt-[10px] md:w-[310px] leading-[1.78] lg:leading-[1.8] tracking-[0.020em] lg:tracking-[0.024em] lg:w-[440px] xl:w-[470px] text-[17px] text-[#626364]">Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You   will need to <span className=" text-[#0000ee] tracking-wider mx-[4px] underline">talk to us</span> for additional permissions about our templates. Thank you.</p>
            <p className="mt-[40px] h-[50px] w-[140px] border pt-[6.6px] tracking-wider pl-[11px] flex items-center justify-center ml-[200px] md:ml-[165px] md:mt-[46.5px] md:pt-0 md:h-[48px] lg:ml-[295px] lg:h-[46px]  xl:ml-[340px] ">Read More</p>
          </div>
        </div>
        <p className="h-[0px]"></p>
      </section>
    </div>
  );
};

export default Home;
