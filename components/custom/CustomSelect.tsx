'use client';
import { useState } from 'react';
import React from 'react';
import {  Box,Select, MenuItem } from '@mui/material';
import { customMenuProps } from './CustomMenuProps';
import { CustomIcon } from './CustomIcon';

export const CustomSelect = () => {
  const [value, setValue] = useState('all');

  return (
  <Box
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
  onChange={(e) => setValue(e.target.value)}
  MenuProps={customMenuProps}
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
    transition: 'opacity 0.3s ease',
  },
  '& .MuiSelect-iconOpen': {
    opacity: 0,  // Hides the arrow when menu is open
  },

  }}
>
  {["All", " 3D", "Epics", "Anime", "Sport", "Action", "History", "Classic", "Kids", "Drama"].map((item, index) => (
    <MenuItem
      key={index}
      value={item.toLowerCase()}
      sx={{
        width: '100%',      // Ensure fills grid cell
        height: '100%',  
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
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
      }}
    >
      {item}
    </MenuItem>
  ))}
</Select>
    </Box>
  );
};
