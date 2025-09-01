"use client";

import React from "react";
import { PlatformSelection } from "../custom/CustomPlatform";
import { CustomSelect } from "../custom/CustomSelect";
import menu from "@/public/assets/images/menuIcon.svg";
import search from "@/public/assets/images/searchIcon2.svg";
import logo from "@/public/assets/images/logo.svg";
import profile from "@/public/assets/images/profileIcon.svg";
import Image from "next/image";
import Link from "next/link";

export default function MobileHeader() {
  const [showPlatformSelection, setShowPlatformSelection] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div
      className="flex w-full max-w-[425px] sm:w-[425px] md:w-[768px] items-center h-[120px] sm:h-[140px] md:h-[173px] lg:h-[96px] px-3 sm:px-4 py-2 sm:py-3 flex-wrap cursor-pointer overflow-hidden overflow-y-clip"
      style={{
        background: 'linear-gradient(180deg, #0A0C0E 0%, rgba(10, 12, 14, 0.95) 30%, rgba(10, 12, 14, 0.8) 60%, rgba(10, 12, 14, 0) 100%)'
      }}
    >
     
      {/* Logo - Responsive sizing */}
      <div className="flex-grow flex pt-3 sm:pt-4 md:pt-6 justify-start md:hidden">
        <Image 
          src={logo} 
          width={88} 
          height={15} 
          alt='logo'
          className="w-[70px] h-[12px] sm:w-[80px] sm:h-[14px] md:w-[88px] md:h-[15px]"
        />
      </div>

      {/* Right Icons - Responsive spacing */}
      <div className="flex items-center pt-3 sm:pt-4 md:pt-6 gap-2 sm:gap-3 pr-[1.5rem] sm:pr-[2rem] md:pr-[2.5rem]">
        <Image 
          src={search} 
          width={18} 
          height={13} 
          alt='search'
          className="w-[16px] h-[12px] sm:w-[18px] sm:h-[13px]"
        />
        <button
          className="pt-1 sm:pt-2"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image 
            src={menu} 
            width={31} 
            height={23} 
            alt="menu"
            className="w-[26px] h-[20px] sm:w-[31px] sm:h-[23px]"
          />
        </button>
      </div>

      {/* Platform Selection - Responsive sizing */}
      <div className="w-full sm:w-[392px] md:w-[146px] flex self-center justify-center items-center gap-1 sm:gap-2 h-[16px] sm:h-[18px] md:h-[30px] cursor-pointer md:pt-[1rem] md:pl-[3rem]">
        <div className="scale-50 sm:scale-60 md:scale-75">
          <PlatformSelection onStateChange={setShowPlatformSelection} />
        </div>
        <div
          className="scale-25 sm:scale-35 md:scale-75"
          style={{
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: showPlatformSelection ? 'translateX(65px)' : 'translateX(0px)',
            filter: 'brightness(1)',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(0.7)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.filter = 'brightness(1)';
          }}
        >
          <CustomSelect/>
        </div>
      </div>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999999999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        style={{ touchAction: 'none' }}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        <div className="flex h-full w-full">
          {/* Left Half Dim Overlay */}
          <div
            className="w-1/2 h-full bg-black/60"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
          />

          {/* Right Panel (Menu) - Responsive width */}
          <div
            className={`w-[60%] sm:w-1/2 h-full bg-[#4D4D4D] relative transform transition-transform duration-300 z-[999999999] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            {/* Close button - Responsive positioning */}
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center justify-center hover:brightness-90 transition z-[9999999999]"
            >
              <svg 
                width="28" 
                height="20" 
                viewBox="0 0 42 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[18px] sm:w-[28px] sm:h-[20px] md:w-[32px] md:h-[24px]"
              >
                <rect width="32" height="24" rx="12" fill="#333333" fillOpacity="0.8"/>
                <rect width="32" height="24" rx="12" stroke="url(#paint0_linear_close)" strokeWidth="1"/>
                <path d="M12 8L20 16M20 8L12 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_close" x1="16" y1="24" x2="16" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0.2"/>
                    <stop offset="1" stopColor="#666666"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>

            {/* Content - Responsive spacing */}
            <div className="pt-12 sm:pt-14 md:pt-16 px-6 sm:px-8 md:px-10 text-white flex flex-col gap-5 sm:gap-6 md:gap-7">
              <div className="flex items-center gap-2 sm:gap-3">
                <div 
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <Image 
                    src={profile} 
                    width={32} 
                    height={32} 
                    alt='profile'
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                    style={{
                      transition: 'all 0.3s ease',
                      filter: 'brightness(1)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  />
                </div>
                <span 
                  className={`text-xs sm:text-sm cursor-pointer hover:brightness-75 transition-all duration-200 ${isProfileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  Username
                </span>
              </div>

              {/* Profile Menu Items - Responsive sizing */}
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isProfileMenuOpen ? 'max-h-80 sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {/* Switch Profile */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]">
                      <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white"/>
                      <path d="M12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Switch Profile</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/30 my-1 w-full" />
                </div>

                {/* Notifications */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]">
                      <path d="M8 16C8.88 16 9.6 15.28 9.6 14.4H6.4C6.4 15.28 7.12 16 8 16ZM12.8 10.4V6.4C12.8 3.52 10.48 1.2 7.6 1.2C4.72 1.2 2.4 3.52 2.4 6.4V10.4L0.8 12V13.6H15.2V12L12.8 10.4Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Notifications</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/30 my-1 w-full" />
                </div>

                {/* History */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM8.5 4H7V9L10.5 11.5L11.5 10.5L8.5 8.5V4Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">History</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/30 my-1 w-full" />
                </div>

                {/* Settings */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]">
                      <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12ZM8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Settings</span>
                </div>
              </div>

              {/* Navigation - Responsive text size */}
              <nav className="flex flex-col gap-4 sm:gap-5 text-xs sm:text-sm">
                <Link href="/" className="hover:brightness-75 transition-all duration-200">Home</Link>
                <Link href="/tv-shows" className="hover:brightness-75 transition-all duration-200">TV Shows</Link>
                <Link href="/movies" className="hover:brightness-75 transition-all duration-200">Movies</Link>
                <Link href="/anime" className="hover:brightness-75 transition-all duration-200">Anime</Link>
                <Link href="/new" className="hover:brightness-75 transition-all duration-200">New</Link>
                <Link href="/my-list" className="hover:brightness-75 transition-all duration-200">My List</Link>
              </nav>

              <hr className="mt-3 sm:mt-4 border-white/30" />

              {/* Logout Button - Responsive sizing */}
              <button className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm mt-2 hover:brightness-90 transition" onClick={() => setIsMenuOpen(false)}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px]">
                  <path d="M3 3C3 1.34 4.34 0 6 0H10C11.66 0 13 1.34 13 3V13C13 14.66 11.66 16 10 16H6C4.34 16 3 14.66 3 13V3ZM11.5 8.5L14.5 11.5L16 10L13 7H7V9H13L16 6L14.5 4.5L11.5 7.5V8.5Z" fill="white"/>
                </svg>
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}