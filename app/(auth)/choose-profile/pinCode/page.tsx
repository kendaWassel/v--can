"use client";
import { Box, Typography, InputBase } from '@mui/material';



export default function pinCodePage() {
  return (
     <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: 'hsla(216, 19%, 5%, 1)', // Dark base
            backgroundImage: `
              url('/assets/images/Lines.svg'),
              url('/assets/images/Ellipses.svg'),
              url('/assets/images/PlanetArt.svg')
            `,
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundSize: `
              cover,              /* Lines SVG covers entire background */
              900px auto,         /* Shadow SVG size (adjust width as needed) */
              60% auto           /* Blue rainbow spans full width at bottom */
            `,
            backgroundPosition: `
              center ,         /* Lines at top */
              center center,      /* Shadow in middle */
               bottom       /* Blue rainbow at bottom */
            `,
            justifyItems:"center",
            alignContent:"center"
          }}
        >
          <Box
      sx={{
        p: 4,
        width: {
          xs:"250px",
          md:"484px",
          lg:"'584px'"
      
        },
        height:{
          xs:"178px",
          md:"296px",
          lg:"320px"
        },
        alignContent:"center",
        textAlign:"center",
        borderRadius: '1.5rem',
        background: 'hsla(0, 0%, 5%, 0.6)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
        gap:"32",
        backgroundClip: 'padding-box', // Important to prevent bleed into border
          '&::before': {
           content: '""',
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           padding: '1px', // Border thickness
           borderRadius: {
            xs:"30px",
            md:"48px"
           },
           background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
           WebkitMask:
           'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
           WebkitMaskComposite: 'xor',
           maskComposite: 'exclude',
           pointerEvents: 'none',
           zIndex: 1,
        },
        '& > *': {
        position: 'relative',
        zIndex: 2,
       },
       }}
        >
        <Typography variant="h5" sx={{ color: 'hsla(0, 0%, 100%, 1)', mb: 4,fontStyle:"Bold",  fontFamily: 'Cairo, sans-serif',fontSize:{
          xs:16,
          md:32
        }, fontWeight:700 }}>
          Enter Your PIN
        </Typography>
    
        <Box
        sx={{
        mt:{
          xs:"mt-6"
        },
        display: 'flex',
        width: {
          xs:"105px",
          sm:"200px",
          lg:'274px'
        
        },
        height:{
          xs:"30px",
          sm:"40px",
          md:"50px"
        },
        padding: '16px 25px',
        justifySelf:"center",
        gap: '12px',
        flexShrink: 0,
        borderRadius: '15px',
        border: '1px solid rgba(0, 0, 0, 0.20)',
        background: 'rgba(51, 51, 51, 0.60)',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(7.5px)',
          '&::before': {
           content: '""',
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           padding: '1px', // Border thickness
           borderRadius: "16px",
           background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
           WebkitMask:
           'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
           WebkitMaskComposite: 'xor',
           maskComposite: 'exclude',
           pointerEvents: 'none',
           zIndex: 1,
           },
           '& > *': {
           position: 'relative',
           zIndex: 2,
           },
           }}
            >
            <InputBase
            placeholder="PIN"
            sx={{
            color: 'hsla(0, 0%, 100%, 0.8)',
            fontSize: '16px',
            fontStyle:"Bold",  
            fontFamily: 'Cairo, sans-serif',
            flex: 1,
            '& input': {
            textAlign: 'center',
          },
        }}
        inputProps={{
          maxLength: 6, // Adjust as needed
        }}
        />
            </Box>
          </Box>
        </Box>
  )}
