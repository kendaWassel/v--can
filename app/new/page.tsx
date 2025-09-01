'use client'
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import React from 'react';
import CategorySlider from '@/components/slider/Slider';
import LoveButton from "@/components/custom/LoveButton"
import GradientButton from '@/components/custom/HeroButton';
import MobileHeader from '@/components/TabAndMobHeader/mobileHeader';
import TabletHeader from '@/components/TabAndMobHeader/tabletHeader';
import logo from "@/public/assets/images/new/showLogo.svg"
import Image from 'next/image';

export default function HomePage() {
  


  return (
      <div className="min-h-screen bg-[#0A0C0F] overflow-x-hidden">
 
     <section className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
        {/* Mobile Header - Show on xs and sm (up to md breakpoint) */}
        <div className="block md:hidden">
          <MobileHeader />
        </div>
        {/* Tablet Header - Show on md only */}
        <div className="hidden md:block lg:hidden">
          <TabletHeader />
        </div>
        {/* Desktop Header - Show on lg and up */}
        <div className="hidden lg:block">
          <Header />
        </div>
      </section>
<section
  className="relative h-[1024px] w-[393px] md:w-[768px] lg:w-full bg-cover bg-center overflow-x-hidden"
  style={{
    backgroundImage: "url('/assets/images/new/newBack.svg')",
  }}
>
  {/* Bottom fade overlay */}
  <div
    className="absolute bottom-0 left-0 right-0"
    style={{
      height: "240px", // match the fade's actual height
      backgroundImage: "url('/assets/images/HeroDivider.svg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "bottom center",
      pointerEvents: "none",
    }}
  />
       
       <div className="relative pt-[13rem] ml-[1.5rem] z-10 flex flex-col h-full text-center text-white px-4 items-center lg:items-start">
            <Image src={logo} width={294} height={142} alt='logo'/>
       
        {/* First Div (maybe a headline) */}
        <div
        className="flex md:pr-8 gap-1 md:gap-[17px] pt-8 text-white pb-8 
        place-content-center lg:place-content-start lg:ml-4 
        md:w-full w-[90%] whitespace-nowrap 
        text-sm sm:text-sm md:text-base"
      style={{
        fontFamily: "Cairo, sans-serif",
        //fontWeight: 700,
       //fontSize: "10px",
        lineHeight: "100%",
      }}
    >
      {/* Year */}
      <span className="w-[36px] font- h-[30px] inline-block">2019</span>

      {/* Dot */}
      <span className="w-[6px] h-[6px] md:w-[10px] md:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

      {/* Genre */}
      <span className="w-[178px] h-[30px] inline-block">Historical Drama & Action</span>

      {/* Dot */}
      <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

      {/* Duration */}
      <span className="w-[53px] h-[30px] inline-block">1h 59m</span>

      {/* Dot */}
      <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

      {/* Rating */}
      <span className="w-[88px] h-[30px] text-[#056700] inline-block">8.2/10 IMDb</span>
    </div>

           {/* Second Div (maybe a subtitle) */}
        <div className="lg:pl-2 md:pl-0 text-start text-base mb-6 font-cairo  text-[hsla(0, 0%, 100%, 1)] ">
          <p>April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory,</p> 
          <p> two soldiers are assigned to race against time and deliver a message</p>
          <p>that will stop 1,6 men from walking straight into a deadly  trap. </p>
        </div>
       <div className="flex items-start pt-4">
       <GradientButton />
       <LoveButton />
          </div>
        
        </div>
         <div
    className="absolute bottom-6 left-6 font-cairo font-bold text-[24px] text-[#FFFFFF] pl-4 md:pl-16"
    style={{
      zIndex: 10, // ensures it's above the fade
    }}
  >
    Category (Trend - New - Continue watching)
  </div>
     </section> 
    <section>
           <CategorySlider/>
    <section>
      <div className=" font-cairo font-bold text-[24px] text-[#FFFFFF] bg-[#0A0C0F] pl-6 md:pl-[5rem]">
        Category (Trend - New - Continue watching)
      </div>
      <CategorySlider/>
    </section>  
    <section>
      <div className=" font-cairo font-bold text-[24px] text-[#FFFFFF] bg-[#0A0C0F] pl-6 md:pl-[5rem]">
        Category (Trend - New - Continue watching)
      </div>
      <CategorySlider/>
    </section>
    </section>
     <section
      className="relative w-full h-[290vh] bg-no-repeat"
     style={{
    backgroundImage: "url('/assets/images/Homepage.svg')",
    backgroundPosition: "left bottom", // align bottom-left
    backgroundSize: "cover", 
     backgroundRepeat: "no-repeat",
    backgroundColor: "#0A0C0F",          // <- important
    outline: "none",
    border: "none",
    }}
     >
     </section>
     <Footer/>
  </div>
  );
}

