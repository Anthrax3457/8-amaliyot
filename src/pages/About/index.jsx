import React from 'react'
import { Parallax } from 'react-parallax'
import Gallery from './gallery'
// icons 
import { FaPepperHot } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";
// style 
import './style.css'
const About = () => {
    return (
        <div className="xl:flex xl:flex-col xl:items-center">
            <section className="bg-white h-full flex xl:w-[88%] flex-col justify-center items-center w-full">
                <div className="w-[329px] md:w-[95%] flex flex-col items-center text-center justify-center">
                    <p className="text-[2rem] font-normal pt-[60px] tracking-wide leading-[1.4]">About Simple House</p>
                    <p className="text-[#626364] mt-[30px] text-[18px] leading-[1.699] tracking-normal md:mt-[30px] md:text-[18px] md:leading-[1.7] md:tracking-normal md:w-[86%] lg:w-[64.8%] text-center xl:w-[55%]">This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.</p>
                    <Gallery />
                    <Parallax className='parallax__img h-[300px] md:w-[740px] md:h-[220px] lg:w-[1000px] lg:mt-[108px] xl:mt-[90px] xl:w-[1100px] xl:h-[220px] md:mt-[80px] w-[340px]  mt-[100px] bg-center bg-fixed bg-origin-content' bgImage='img/about-05.jpg' strength={350} > </Parallax>
                </div>
                <div className='grid lg:flex lg:gap-x-[32px] md:mt-[80px]  justify-center items-center xl:gap-[64px] gap-[90px] '>
                    <div className='grid items-center justify-center lg:mt-[5px] lg:w-[310px]'>
                        <div className='grid items-center text-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <p className='text-[4.5rem] lg:text-[4rem] text-[#999]'> <FaPepperHot /></p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='mt-[60px] tracking-wide text-[#626364] leading-[1.8] w-[80%] md:w-[90%] lg:w-[269.8px] xl:w-[100%]'>Donec sed orci fermentum, convallis lacus id, tempus elit.Sed eu neque accumsan, porttitor arcu a, interdum est.Donec in risus eu <span className='hidden opacity-0 lg:inline
                                '>...</span> ante.</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='w-[140px] mt-[37px] flex justify-center items-center py-[8px] text-[white] bg-[#2D99CC]'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid items-center justify-center lg:mt-[-20px] xl:mt-0 lg:w-[310px]'>
                        <div className='grid items-center text-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <p className='text-[4.5rem] lg:text-[4rem] text-[#999]'> <FaSeedling /></p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='mt-[60px] tracking-wide text-[#626364] leading-[1.8] w-[80%] md:w-[90%] lg:w-[269px]  xl:w-[100%]'>Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='w-[140px] mt-[37px] flex justify-center items-center py-[8px] text-[white] bg-[#319966]'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid items-center justify-center lg:mt-[-30px] xl:mt-0 lg:w-[310px]'>
                        <div className='grid items-center text-center justify-center'>
                            <div className='flex items-center justify-center'>
                                <p className='text-[4.5rem] lg:text-[4.5rem] text-[#999]'> <FaCocktail /></p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='mt-[60px] tracking-wide text-[#626364] leading-[1.8] w-[80%] md:w-[90%] lg:w-[269px]  xl:w-[100%]'>Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='w-[140px] mt-[37px] flex justify-center items-center py-[8px] text-[white] bg-[#993332]'>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-[90px] md:flex md:justify-center md:items-center lg:mt-[87px] lg:gap-x-[20px] xl:gap-x-[18px]  md:gap-x-[17px] xl:ml-[-7.5%]'>
                    <div className='pl-[0.8rem]'>
                        <img className='md:h-[218px] lg:h-[280px] xl:h-[280px]' src="/img/about-06.jpg" alt="" />
                    </div>
                    <div className='pl-[0.98rem] md:mt-[-1.5px]  pr-[1em] md:w-[365px] lg:w-[510px]'>
                        <p className='text-[1.6rem] font-extralight text-[#1a6692] tracking-[0.033em] mt-[8px] md:mt-[1px]'>
                            History of our restaurant
                        </p>
                        <p className='mt-[29px] leading-[1.8] text-[16.8px] tracking-[0.030em] text-[#626364] md:mt-[28.5px]'>
                            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.
                        </p>
                        <p className='mt-[20px] leading-[1.8] text-[16.8px] tracking-wide text-[#626364] md:tracking-wider md:mt-[19.2px]'>
                            Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to  <span className='mx-[3px] text-[#0000ee] underline'>contact TemplateMo</span> for additional permissions about our templates. Thank you.
                        </p>
                    </div>
                </div>
                <p className='mt-[1px] md:mt-[7px] xl:mt-0'></p>
            </section>
        </div>


    )
}

export default About