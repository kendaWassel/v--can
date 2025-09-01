'use client';
import React from 'react';
import { PlatformSelection } from '../custom/CustomPlatform';
import { CustomSelect } from '../custom/CustomSelect';
import logo from "@/public/assets/images/logo.svg";
import profile from "@/public/assets/images/profileIcon.svg";
import search from "@/public/assets/images/searchIcon.svg"
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuItem, Box } from '@mui/material';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/tv-shows" },
  { name: "Movies", href: "/movies" },
  { name: "Anime", href: "/anime" },
  { name: "New", href: "/new" },
  { name: "My List", href: "/my-list" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isSearchHovered, setIsSearchHovered] = React.useState(false);
  const [showPlatformSelection, setShowPlatformSelection] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header 
      className="fixed top-0 left-0 z-50 flex w-full h-[193px] px-24 py-12 gap-2 flex-wrap shadow-none"
      style={{
        background: 'linear-gradient(360deg, rgba(11, 13, 16, 0) 0%, #15191E 64.34%)',
        marginTop: '-8px'
      }}
    >
      {/* Left Side (Logo or Title) */}
      <div className="hidden lg:flex items-center ">
        {/* Logo */}
        <div className="w-[150px] h-[26px] flex gap-0.5" style={{ aspectRatio: '75/13' }}>
          <Image src={logo} width={150} height={26} alt='logo'/>
        </div>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex justify-center items-center gap-12 flex-grow cursor-pointer w-[593px]">
        {navLinks.map((link, index) => (
        <div key={index} className="flex items-center h-[37px] relative group">
          <Link
            href={link.href}
            className="text-white font-normal text-base px-2.5 relative transition-all duration-300 ease-in-out"
            style={{
              fontFamily: "Cairo, sans-serif",
              lineHeight: "normal",
            }}
          >
            <span
              style={{
                filter: 'brightness(1)',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              {link.name}
            </span>
            {/* الخط الأبيض تحت الزر */}
            <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full opacity-0 group-hover:opacity-100"></div>
          </Link>
        </div>
      ))}
        </div>

        <div className="hidden md:flex items-center gap-4 sm:pl-60 lg:pl-0">
          {/* Right Side Inner Container */}
          {/**search bar */}
          <div 
            className="h-[39px] hidden lg:flex px-6 py-1 justify-center items-center gap-3 rounded-3xl border border-black/20 backdrop-blur-sm transition-all duration-300"
            style={{
              background: 'rgba(77, 77, 77, 0.60)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(35, 45, 60, 0.80)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(77, 77, 77, 0.60)';
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-white placeholder-white/50 text-base font-semibold w-32"
              style={{ 
                fontFamily: 'Cairo, sans-serif',
                lineHeight: 'normal'
              }}
            />
            <Image src={search} width={20} height={20} alt='search'/>
          </div>
          
          {/** profile icon */}
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={handleClick}
          >
            <Image 
              src={profile} 
              width={39} 
              height={39} 
              alt='profile'
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
          </Box>
          
          {/* Profile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            keepMounted={false}
            PaperProps={{
              sx: {
                mt: '30px',
                width: '200px',
                borderRadius: '24px',
                background: 'rgba(77, 77, 77, 0.6)',
                position: 'relative',
                overflow: 'hidden',
                padding: '1px',
                backdropFilter: 'blur(5px)',
                boxSizing: 'border-box',
                maxHeight: 'none',
                ml: '-20px',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '24px',
                  padding: '1px',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), #666666)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none',
                  zIndex: 1,
                },
                '& .MuiMenu-list': {
                  position: 'relative',
                  zIndex: 2,
                  padding: '0',
                  background: 'rgba(77, 77, 77, 0.6)',
                  borderRadius: '22px',
                  boxSizing: 'border-box',
                  maxHeight: 'none',
                },
              },
            }}
            sx={{
              '& .MuiBackdrop-root': {
                backgroundColor: 'transparent',
              },
            }}
          >
            {/* Switch Profile */}
            <MenuItem onClick={handleClose} sx={{ 
              color: 'white', 
              fontFamily: 'Cairo', 
              fontSize: '14px', 
              py: 2,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Box sx={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="white"/>
                  <path d="M12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z" fill="white"/>
                </svg>
              </Box>
              Switch Profile
            </MenuItem>
            
            {/* Notifications */}
            <MenuItem onClick={handleClose} sx={{ 
              color: 'white', 
              fontFamily: 'Cairo', 
              fontSize: '14px', 
              py: 2,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Box sx={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 16C8.88 16 9.6 15.28 9.6 14.4H6.4C6.4 15.28 7.12 16 8 16ZM12.8 10.4V6.4C12.8 3.52 10.48 1.2 7.6 1.2C4.72 1.2 2.4 3.52 2.4 6.4V10.4L0.8 12V13.6H15.2V12L12.8 10.4Z" fill="white"/>
                </svg>
              </Box>
              Notifications
            </MenuItem>
            
            {/* History */}
            <MenuItem onClick={handleClose} sx={{ 
              color: 'white', 
              fontFamily: 'Cairo', 
              fontSize: '14px', 
              py: 2,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Box sx={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM8.5 4H7V9L10.5 11.5L11.5 10.5L8.5 8.5V4Z" fill="white"/>
                </svg>
              </Box>
              History
            </MenuItem>
            
            {/* Settings */}
            <MenuItem onClick={handleClose} sx={{ 
              color: 'white', 
              fontFamily: 'Cairo', 
              fontSize: '14px', 
              py: 2,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Box sx={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12ZM8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6Z" fill="white"/>
                </svg>
              </Box>
              Settings
            </MenuItem>
            
            {/* Log Out */}
            <MenuItem onClick={handleClose} sx={{ 
              color: 'white', 
              fontFamily: 'Cairo', 
              fontSize: '14px', 
              py: 2,
              px: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3C3 1.34 4.34 0 6 0H10C11.66 0 13 1.34 13 3V13C13 14.66 11.66 16 10 16H6C4.34 16 3 14.66 3 13V3ZM11.5 8.5L14.5 11.5L16 10L13 7H7V9H13L16 6L14.5 4.5L11.5 7.5V8.5Z" fill="white"/>
                </svg>
              </Box>
              Log Out
            </MenuItem>
          </Menu>
        </div>
      

      <div className="flex self-center justify-center items-center gap-3 flex-grow w-[415px] h-[42px] sm:pl-40 md:pl-0" style={{ marginTop: '16px' }}>
        <div>
          <PlatformSelection onStateChange={setShowPlatformSelection} />
        </div>
        <div
          style={{
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(1)',
            cursor: 'pointer',
            transform: showPlatformSelection ? 'translateX(154.5px)' : 'translateX(0px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          <CustomSelect/>
        </div>
      </div>
    </header>
  );
};

export default Header;