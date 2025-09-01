"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  const [buttonState, setButtonState] = useState<"normal" | "hover" | "clicked">("normal");

  const handleMouseDown = () => setButtonState("clicked");
  const handleMouseUp = () => setButtonState("hover");

  return (
    <section className="relative w-full flex items-center justify-center">
      <Link href='/movie/2'>
      <div
        className="relative cursor-pointer select-none w-[176px] h-[60px]"
        onMouseEnter={() => setButtonState("hover")}
        onMouseLeave={() => setButtonState("normal")}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        role="button"
        aria-label="Play Now"
        tabIndex={0}
      >
        <Image
          src="/assets/images/buttonWatchNow.svg"
          alt="Play Now"
          width={176}
          height={60}
          className={`absolute top-0 left-0 transition-opacity duration-700 ease-out ${buttonState === "normal" ? "opacity-100" : "opacity-0"}`}
          draggable={false}
        />
        <Image
          src="/assets/images/buttonHoverd.svg"
          alt="Play Now"
          width={176}
          height={60}
          className={`absolute top-0 left-0 transition-opacity duration-700 ease-out ${buttonState === "hover" ? "opacity-100" : "opacity-0"}`}
          draggable={false}
        />
        <Image
          src="/assets/images/buttonClicked.svg"
          alt="Play Now"
          width={176}
          height={60}
          className={`absolute top-0 left-0 transition-opacity duration-300 ease-out ${buttonState === "clicked" ? "opacity-100" : "opacity-0"}`}
          draggable={false}
        />
      </div>
      </Link>
    </section>
  );
}
