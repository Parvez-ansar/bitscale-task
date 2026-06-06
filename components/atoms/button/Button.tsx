"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  iconOnly?: boolean;
  children?: React.ReactNode;
}

const variantStyles = {
  primary: "bg-inverse text-white",
  secondary: "bg-muted text-inverse",
  outlined: "border border-muted bg-body text-inverse",
};

export function Button({
  variant = "primary",
  startContent,
  endContent,
  iconOnly = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={disabled ? {} : { scale: 0.96 }}
      whileHover={disabled ? {} : { opacity: 0.85 }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 h-[35px] text-sm font-medium rounded-[8px] cursor-pointer disabled:opacity-40 disabled:pointer-events-none",
        iconOnly ? "w-[35px]" : "px-3",
        variantStyles[variant],
        className,
      )}
      disabled={disabled}
      {...(props as React.ComponentProps<typeof motion.button>)}>
      {/* start icon slides in from left */}
      {startContent && (
        <motion.span
          className="inline-flex items-center"
          initial={{ x: -2, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}>
          {startContent}
        </motion.span>
      )}

      {!iconOnly && children}

      {/* end icon slides in from right */}
      {endContent && (
        <motion.span
          className="inline-flex items-center"
          initial={{ x: 2, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}>
          {endContent}
        </motion.span>
      )}
    </motion.button>
  );
}
