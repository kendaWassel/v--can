'use client';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import {  Box,Select, MenuItem } from '@mui/material';
import { customMenuProps } from './CustomMenuProps';
import { CustomIcon } from './CustomIcon';

export const CustomSelect = () => {
  const [value, setValue] = useState('all');
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // التحقق من أن النقر ليس على المكون نفسه أو على القائمة
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        // التحقق من أن النقر ليس على عنصر من القائمة المنسدلة
        const target = event.target as HTMLElement;
        const isMenuClick = target.closest('.MuiMenu-root') || 
                           target.closest('.MuiPaper-root') ||
                           target.closest('.MuiMenu-list');
        
        if (!isMenuClick) {
          setOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setOpen(false);
  };

  // دالة لفتح/إغلاق القائمة (toggle)
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
  <Box
  ref={selectRef}
  onClick={handleToggle} // فتح/إغلاق القائمة عند النقر على المربع
  sx={{
    width: {
      xs:"50px",
      sm:"94px"
    },
    height: {
      xs:"22px",
      sm:"42px"
    },
    borderRadius: '24px',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'hsla(0, 0%, 30%, 0.6)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    gap: '12px',
    overflow: 'hidden',  // This is important to clip content
    cursor: 'pointer', // إضافة cursor pointer
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,  // shorthand for top:0; right:0; bottom:0; left:0
      borderRadius: '24px',
      padding: '1px', // Border thickness
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%)',
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: 1,
      boxSizing: 'border-box',
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  }}
>
   <Select
  value={value}
  open={open}
  onOpen={() => {}} // إزالة onOpen لمنع التضارب
  onClose={handleClose}
  onChange={handleChange}
  MenuProps={{
    ...customMenuProps,
    onClose: handleClose,
  }}
  variant="standard"
  disableUnderline
  IconComponent={CustomIcon}
  sx={{
    pt: "3px",
    fontFamily: "Cairo, SemiBold",
    fontSize: {
      xs: "9px",   // Small devices
      sm: "16px"   // Medium devices
    },
    fontWeight: 600,
    color: 'hsla(0, 0%, 100%, 1)',
    '& .MuiSelect-select': {
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSelect-icon': {
      transition: 'all 0.3s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    // إزالة إخفاء الأيقونة عند فتح القائمة
    '& .MuiSelect-iconOpen': {
      opacity: 1,
    },
  }}
>
  {["All", " 3D", "Epics", "Anime", "Sport", "Action", "History", "Classic", "Kids", "Drama"].map((item, index) => (
    <MenuItem
      key={index}
      value={item.toLowerCase()}
      onClick={(e) => {
        e.stopPropagation(); // منع انتشار الحدث
        setOpen(false); // إغلاق القائمة فقط
      }}
      sx={{
        width: '100%',      // Ensure fills grid cell
        height: '100%',  
        padding: '4px 8px',  // padding معتدل لزيادة منطقة النقر
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',    // إضافة مؤشر النقر
       
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontSize: {
          xs: '9px',
          sm: '12px'
        },
        color: 'hsla(0, 0%, 100%, 1)',
        lineHeight: '100%',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        gridColumnStart: (index % 2) + 1,  // Left (1) or Right (2)
        gridRowStart: Math.floor(index / 2) + 1,  // Row Number
        
        // إضافة hover effect لتحسين تجربة المستخدم
        '&:hover': {
          backgroundColor: 'hsla(0, 0%, 100%, 0.1)',
          transition: 'background-color 0.2s ease'
        }
      }}
    >
      {item}
    </MenuItem>
  ))}
</Select>
    </Box>
  );
};
