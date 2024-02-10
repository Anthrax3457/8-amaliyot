import React from "react";
// icons 
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// styles
import "./style.css";
import Accordions from "./Accardion";

const Contact = () => {
  return (
    <div className="xl:flex xl:flex-col xl:items-center">
      <section className="bg-white w-full h-full flex flex-col xl:w-[88%] ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[350px] md:w-[90%] flex flex-col items-center text-center justify-center">
            <p className="text-[2rem] font-normal pt-[60px] tracking-wide leading-[1.4]">Contact Page</p>
            <p className="text-[#626364] mt-[30px] text-[18px] leading-[1.7] tracking-normal md:w-[91%] lg:w-[68%] xl:w-[58%]">You may use <span className=" text-[#0000ee] tracking-wider mx-[4px] underline">Simple Contact Form</span> to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect. Total 3 HTML pages included in this template.</p>
          </div>
          <div className="md:flex md:ml-[0] lg:ml-[-5.1%] xl:ml-[-4.7%] md:gap-x-[3.1rem] lg:gap-x-[7rem] xl:gap-x-[7.5rem]  md:items-start md:justify-center">
            <div>
              <div className="mt-[30px] flex flex-col items-center">
                <input className="border-b mt-[20px] border-[#9999] pl-[10px] py-[11px] lg:pt-[14px] lg:pb-[8px] md:w-[315px] w-[340px] active:border-blue-700 focus:outline-blue-300 text-[18px]" placeholder="Name" type="text" name="" id="" />
                <input className="border-b mt-[20px] border-[#9999] pl-[10px] py-[11px] lg:pt-[14px] lg:pb-[8px] md:w-[315px] w-[340px] active:border-blue-700 focus:outline-blue-300 text-[18px]" placeholder="Email" type="text" name="" id="" />
                <textarea className="border-b h-[150px] mt-[20px] border-[#9999] pl-[10px] py-[11px]  lg:pt-[14px] lg:pb-[8px] md:w-[315px] w-[340px] active:border-blue-700 focus:outline-blue-300 text-[18px]" placeholder="Message" type="text" name="" id="" />
                <p className="mt-[33px] bg-[#319966] md:ml-[205px] text-white w-[100px] flex items-center justify-center ml-[251px] py-[8px]">Send</p>
              </div>
            </div>
            <div className="md:w-[370px] lg:w-[380px] md:mt-[30px]">
              <div className="grid px-[1rem] items-center justify-center">
                <p className="text-[1.6rem] text-[#319966] font-extralight pt-[28px] tracking-wide leading-[1.4]">Our Address</p>
                <p className="text-[#626364] mt-[28px] text-[18px] leading-[1.7] tracking-normal md:w-[94%] lg:w-[100%] xl:w-[100%]">
                  180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550
                </p>
              </div>
              <div className="mt-[50px]">
                <div className="flex md:grid md:gap-y-[1.4rem] md:items-start px-[1rem] items-center gap-[0.2rem]">
                  <div className="flex gap-[1.5rem]  items-center">
                    <p className="text-[17px] text-[#319966]"><FaPhone /></p>
                    <p className="text-[17px] tracking-wide">080-090-0110</p>
                  </div>
                  <div className="flex gap-[1rem] items-center">
                    <p className="text-[17px] text-[#319966]"><MdEmail /></p>
                    <p className="text-[17px] tracking-wider">info@company.co</p>
                  </div>
                </div>
                <div className="flex px-[1.7rem] gap-[1.5em] mt-[44px] items-center">
                  <p className="text-[20px] text-[#626364]"><FaFacebook /></p>
                  <p className="text-[20px] text-[#626364]"><FaTwitter /></p>
                  <p className="text-[20px] text-[#626364]"><FaInstagram /></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[1rem] mt-[80px] md:mt-[85px] xl:px-[10%]">
          <iframe className="w-[100%] h-[480px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.345193594565!2d-43.37126322504154!3d-23.011094441606502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb01301b7c29%3A0xb621e8e072709266!2sBarra%20da%20Tijuca%20-%20Hell%20de%20Janeiro!5e0!3m2!1sru!2s!4v1707537637849!5m2!1sru!2s"></iframe>
        </div>
        <div className="flex flex-col mt-[-8px] px-[1rem] text-center justify-center items-center">
          <p className="text-[2rem] font-normal pt-[60px] tracking-wide leading-[1.4]">FAQs</p>
          <p className="text-[#626364] mt-[30px] text-[18px] leading-[1.7] tracking-normal w-[100%] md:w-[88%] lg:w-[65%] xl:w-[53%]">
            This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666
          </p>
          <Accordions />
        </div>
      </section>
    </div>
  )
};

export default Contact;
