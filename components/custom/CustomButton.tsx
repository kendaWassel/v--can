"use client";

import { useRouter } from "next/navigation";
import styles from './CustomButton.module.css';

interface CustomButtonProps {
  label: string;
  to: string;
  className?: string;
}

export default function CustomButton({ label, to, className }: CustomButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(to)}
      className={`${styles.gradientButton} font-cairo font-bold text-white border-[2px] border-[#d2d2d214] font-bold ${className}`}
    >
      {label}
    </button>
  );
}
