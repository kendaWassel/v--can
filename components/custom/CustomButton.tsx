"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export default function CustomButton({ children, to, className }: CustomButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className={`${styles.gradientButton} font-cairo font-bold text-white border-[2px] border-[#d2d2d214] font-bold ${className}`}
    >
      {children}
    </button>
  );
}
