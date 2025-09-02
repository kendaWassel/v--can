'use client'
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import React from 'react';
import CategorySlider from '@/components/slider/Slider';
import LoveButton from "@/components/custom/LoveButton"
import GradientButton from '@/components/custom/HeroButton';
import MobileHeader from '@/components/TabAndMobHeader/mobileHeader';
import TabletHeader from '@/components/TabAndMobHeader/tabletHeader';
import show from "@/public/assets/images/showDetails.svg";
import history from "@/public/assets/images/1917.svg"
import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0C0F] overflow-x-hidden">
      {/* Header Section - Fixed at top */}
      <section className="fixed top-0 left-0 w-full z-[9999] overflow-x-hidden">
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

      {/* Hero Section */}
      <section
        className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[1024px] w-full bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: "url('/assets/images/HeroImageContainer.svg')",
        }}
      >
        {/* Gradient overlay - darker on left, lighter on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.05) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "100px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(10, 12, 15, 0.3) 50%, rgba(10, 12, 15, 1) 100%)",
            pointerEvents: "none",
          }}
        />
        
        {/* Hero Content */}
        <div className="relative pt-[8rem] sm:pt-[10rem] md:pt-[12rem] lg:pt-[13rem] px-4 sm:px-6 md:px-8 lg:ml-[1.5rem] z-20 flex flex-col h-full text-center text-white items-center lg:items-start">
          {/* Movie Poster */}
          <Image 
            src={history} 
            width={300} 
            height={124} 
            alt='1917' 
            className="w-[140px] h-[60px] sm:w-[160px] sm:h-[65px] md:w-[180px] md:h-[70px] lg:w-[300px] lg:h-[124px]"
          />
          
          {/* Movie Info */}
          <div
            className="flex flex-wrap gap-1 sm:gap-2 md:gap-[17px] pt-4 sm:pt-6 md:pt-8 text-white pb-4 sm:pb-6 md:pb-8 
            place-content-center lg:place-content-start lg:ml-4 
            w-full max-w-[90%] lg:max-w-none
            text-xs sm:text-sm md:text-sm"
            style={{
              fontFamily: "Cairo, sans-serif",
              lineHeight: "100%",
            }}
          >
            {/* Year */}
            <span className="w-[32px] sm:w-[36px] h-[25px] sm:h-[30px] inline-block">2019</span>

            {/* Dot */}
            <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

            {/* Genre */}
            <span className="w-[140px] sm:w-[160px] md:w-[178px] h-[25px] sm:h-[30px] inline-block">Historical Drama & Action</span>

            {/* Dot */}
            <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

            {/* Duration */}
            <span className="w-[45px] sm:w-[53px] h-[25px] sm:h-[30px] inline-block">1h 59m</span>

            {/* Dot */}
            <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

            {/* Rating */}
            <span className="w-[70px] sm:w-[88px] h-[25px] sm:h-[30px] text-[#0b9b04] font-bold inline-block">8.2/10 IMDb</span>
          </div>

          {/* Movie Description */}
          <div className="px-2 sm:px-4 lg:pl-2 place-content-center lg:place-content-start md:pl-0 text-center lg:text-start text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 font-cairo text-[hsla(0, 0%, 100%, 1)] leading-relaxed sm:leading-loose">
            <p className="mb-2 sm:mb-3">April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory,</p> 
            <p className="mb-2 sm:mb-3"> two soldiers are assigned to race against time and deliver a message</p>
            <p className="mb-2 sm:mb-3">that will stop 1,6 men from walking straight into a deadly trap.</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-start pt-2 sm:pt-4 gap-2 sm:gap-4">
            <GradientButton />
            <LoveButton />
          </div>
        </div>
        
        {/* Category Label */}
        <div
          className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 font-cairo font-bold text-lg sm:text-xl md:text-2xl text-[#FFFFFF] px-2 sm:px-4 md:pl-16"
          style={{
            zIndex: 10,
          }}
        >
          Category (Trend - New - Continue watching)
        </div>
      </section>

      {/* Category Sections */}
      <section className="bg-[#0A0C0F]">
        {/* First Category */}
        <CategorySlider/>
        
        {/* Second Category */}
        <div className="font-cairo font-bold text-lg sm:text-xl md:text-2xl text-[#FFFFFF] bg-[#0A0C0F] pl-4 sm:pl-6 md:pl-[5rem] py-4">
          Category (Trend - New - Continue watching)
        </div>
        <CategorySlider/>
        
        {/* Third Category */}
        <div className="font-cairo font-bold text-lg sm:text-xl md:text-2xl text-[#FFFFFF] bg-[#0A0C0F] pl-4 sm:pl-6 md:pl-[5rem] py-4">
          Category (Trend - New - Continue watching)
        </div>
        <CategorySlider/>
      </section>

      {/* Background Section */}
      <section
        className="relative w-full h-[200vh] sm:h-[250vh] md:h-[290vh] bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/Homepage.svg')",
          backgroundPosition: "left bottom",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0A0C0F",
          outline: "none",
          border: "none",
        }}
      />
      
      <Footer/>
    </div>
  );
}





