import React, { useState } from 'react';
import Image from 'next/image';

interface LoveButtonProps {
  onClick?: (isClicked: boolean) => void;
  initialState?: boolean;
  className?: string;
  size?: number;
  alt?: string;
}

const LoveButton: React.FC<LoveButtonProps> = ({
  onClick,
  initialState = false,
  className = '',
  size = 151,
  alt = 'Love button'
}) => {
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = () => {
    const newState = !isClicked;
    setIsClicked(newState);
    onClick?.(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex -mt-4 items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95  ${className}`}
      type="button"
      aria-label={isClicked ? 'Unlike' : 'Like'}
    >
      <Image
        src={isClicked ? "/assets/images/lovebtn/Clicked.svg" : "/assets/images/lovebtn/Default.svg"}
        alt={alt}
        width={size}
        height={size}
        priority
      />
    </button>
  );
};

export default LoveButton;