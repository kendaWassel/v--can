"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function HeroSection() {
  const [buttonState, setButtonState] = useState<"normal" | "hover" | "clicked">("normal");

  const getButtonSrc = () => {
    switch (buttonState) {
      case "hover":
        return "/assets/images/buttonHoverd.svg";
      case "clicked":
        return "/assets/images/buttonClicked.svg";
      default:
        return "/assets/images/buttonWatchNow.svg";
    }
  };

  const handleMouseDown = () => setButtonState("clicked");
  const handleMouseUp = () => setButtonState("hover");

  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      {/* Hero content here */}
      <Link href="/movie/2">
      <Image
        src={getButtonSrc()}
        alt="Play Now"
        width={176}
        height={60}
        className="cursor-pointer select-none"
        onMouseEnter={() => setButtonState("hover")}
        onMouseLeave={() => setButtonState("normal")}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      </Link>
    </section>
  );
}
