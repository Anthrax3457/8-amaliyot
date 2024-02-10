import React from 'react'
import img1 from '../../../public/img/about-01.jpg'
import img2 from '../../../public/img/about-02.jpg'
import img3 from '../../../public/img/about-03.jpg'
import img4 from '../../../public/img/about-04.jpg'
// icons 
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Gallery = () => {
    return (
        <div className='grid lg:flex lg:flex-wrap lg:gap-x-[3.2rem] lg:mt-[0.5em] xl:gap-x-[3.7rem] xl:ml-[24px] lg:ml-[-1.3%]'>
            {/* 1 CARD */}
            <div className='grid md:flex justify-center md:gap-[1em]  items-center mt-[60px]'>
                <div className='grid items-center justify-center '>
                    <img className='md:h-[240px] ' src={img1} alt="" />
                </div>
                <div>
                    <div className='flex flex-col justify-start items-start text-start pl-[0.7rem] md:pl-[0.6rem]   md:w-[558px] lg:w-[290px] xl:w-[331px] md:mt-[-40px] md:ml-[-1%]'>
                        <p className='text-[1.6rem] font-extralight text-[#09c] tracking-[0.030em] md:mt-[11px] mt-[12px] lg:tracking-[0.030em]'>Jennifer Soft</p>
                        <p className='text-[#c39] text-[1.2rem] tracking-tight leading-[1.8]'>Founder and CEO</p>
                        <p className='mt-[20px] leading-[1.9] tracking-[0.06em] md:tracking-[0.05em] text-[#626364]'>Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.</p>
                    </div>
                    <div className='flex items-center gap-[1.5rem] mt-[29px] pl-[1.2rem] md:pl-[1rem] md:gap-[1.3rem]'>
                        <p className='text-[22px] text-[#626364]'><FaFacebook /></p>
                        <p className='text-[22px] text-[#626364]'><FaTwitter /></p>
                        <p className='text-[22px] text-[#626364]'><FaInstagram /></p>
                    </div>
                </div>
            </div>
            {/* 2 CARD */}
            <div className='grid md:flex justify-center md:gap-[1em] lg:gap-[0.7em]  items-center mt-[86.5px] md:mt-[60px]'>
                <div className='grid items-center justify-center '>
                    <img className='md:h-[240px]' src={img2} alt="" />
                </div>
                <div>
                    <div className='flex flex-col justify-start items-start text-start  md:pl-[0.6rem] w-[300px]  md:w-[558px] lg:w-[290px] xl:w-[331px] md:mt-[-40px] md:ml-[-1%]'>
                        <p className='text-[1.6rem] font-extralight text-[#09c] tracking-[0.049em] md:mt-[11px] mt-[10px] lg:tracking-[0.030em]'>Daisy Walker</p>
                        <p className='text-[#c39] text-[1.2rem] tracking-tight leading-[1.8]'>Executive Chef</p>
                        <p className='mt-[20px] leading-[1.9] tracking-[0.06em] md:tracking-[0.05em] text-[#626364]'>Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.</p>
                    </div>
                    <div className='flex items-center gap-[1.2rem] mt-[29px] pl-[0.5rem] md:pl-[1rem] md:gap-[1.3rem]'>
                        <p className='text-[22px] text-[#626364]'><FaFacebook /></p>
                        <p className='text-[22px] text-[#626364]'><FaTwitter /></p>
                        {/* <p className='text-[22px]'><FaInstagram /></p> */}
                    </div>
                </div>
            </div>
            {/* 3 CARD */}
            <div className='grid md:flex justify-center md:gap-[1em] xl:mt-[70px] lg:mt-[91px] items-center mt-[84px] md:mt-[60px]'>
                <div className='grid items-center justify-center '>
                    <img className='md:h-[240px]' src={img3} alt="" />
                </div>
                <div>
                    <div className='flex flex-col justify-start items-start text-start pl-[-0.8rem] md:pl-[0.6rem] w-[309px]  md:w-[558px] lg:w-[290px] xl:w-[340px] md:mt-[-40px] lg: lg:mt-[-37px] md:ml-[-1%]'>
                        <p className='text-[1.6rem] font-extralight text-[#09c] tracking-[0.049em] md:mt-[11px] mt-[12px] lg:tracking-[0.039em] xl:leading-[1.8]'>Florence Nelson</p>
                        <p className='text-[#c39] text-[1.2rem] tracking-tight leading-[1.8]'>Kitchen Manager</p>
                        <p className='mt-[20px] leading-[1.9] tracking-[0.06em] md:tracking-[0.05em] text-[#626364]'>Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.</p>
                    </div>
                    <div className='flex items-center gap-[1.3rem] mt-[29px] xl:gap-[1.5rem]  pl-[0.9rem] md:pl-[1rem] md:gap-[1.3rem]'>
                        <p className='text-[22px] text-[#626364]'><FaFacebook /></p>
                        {/* <p className='text-[22px]'><FaTwitter /></p> */}
                        <p className='text-[22px] text-[#626364]'><FaInstagram /></p>
                    </div>
                </div>
            </div>
            {/* 4 CARD */}
            <div className='grid md:flex justify-center md:gap-[1em] xl:mt-[76px] lg:gap-[0.5em] lg:mt-[91px] xl:ml-[-1%] items-center  mt-[85px] md:mt-[60px]'>
                <div className='grid items-center justify-center '>
                    <img className='md:h-[240px]' src={img4} alt="" />
                </div>
                <div>
                    <div className='flex flex-col justify-start items-start text-start pl-[-0.8rem] md:pl-[0.6rem] w-[309px]  md:w-[558px] lg:w-[280px] xl:w-[331px] md:mt-[-40px] lg:mt-[-35px] md:ml-[-1%]'>
                        <p className='text-[1.6rem] font-extralight text-[#09c] tracking-[0.049em] md:mt-[11px] mt-[13px] '>Valentina Martin</p>
                        <p className='text-[#c39] text-[1.2rem] tracking-tight leading-[1.8]'>Culinary Director</p>
                        <p className='mt-[20px] leading-[1.9] tracking-[0.06em] md:tracking-[0.05em] text-[#626364] '>Praesent non vulputate elit. Orci varius
                            natoque penatibus et magnis montes, nascetur ridiculus mus.</p>
                    </div>
                    <div className='flex items-center gap-[1.3rem] mt-[29px] xl:gap-[1.5rem] pl-[0.9rem] md:pl-[1rem] md:gap-[1.3rem]'>
                        <p className='text-[22px] text-[#626364]'><FaFacebook /></p>
                        <p className='text-[22px] text-[#626364]'><FaTwitter /></p>
                        <p className='text-[22px] text-[#626364]'><FaInstagram /></p>
                        <p className='text-[22px] text-[#626364]'><FaYoutube /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery