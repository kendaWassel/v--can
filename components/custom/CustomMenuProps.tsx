

export const customMenuProps = {
  PaperProps: {
    sx: {
       mt: '20px', // Add vertical gap between button and dropdown
      width: '168px',
      borderRadius: '24px',
      background: 'rgba(77, 77, 77, 0.6)',
      position: 'relative',
      overflow: 'hidden', // ✅ Clip children (pseudo-element)
      padding: '1px',     // ✅ Border thickness
      backdropFilter: 'blur(5px)',
      boxSizing: 'border-box',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '24px',
        padding: '1px', // thickness of the border
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
        padding: '16px 16px',  // Add enough padding
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        rowGap: '24px',
        columnGap: '36px',
        background: 'rgba(77, 77, 77, 0.6)',
        borderRadius: '22px',
        boxSizing: 'border-box',
      },
    },
  },
};
