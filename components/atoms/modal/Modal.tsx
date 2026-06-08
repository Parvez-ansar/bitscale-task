"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { Button } from "../button/Button";

type ModalSize = "sm" | "md" | "lg" | "xl" | "full";
type ScrollBehavior = "inside" | "outside";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: ModalSize;
  scrollBehavior?: ScrollBehavior;

  className?: string;
  backdropClassName?: string;
  contentClassName?: string;

  showCloseButton?: boolean;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: "w-[95vw] sm:w-[400px]",
  md: "w-[95vw] sm:w-[600px]",
  lg: "w-[95vw] sm:w-[800px]",
  xl: "w-[95vw] sm:w-[1025px]",
  full: "w-screen h-screen rounded-none",
};

export function Modal({
  open,
  onClose,
  children,
  size = "md",
  scrollBehavior = "inside",
  className,
  backdropClassName,
  contentClassName,
  showCloseButton = true,
}: ModalProps) {
  const CloseButton = showCloseButton ? (
    <Button
      className="absolute right-2 top-2 h-[unset] shrink-0 bg-muted p-1 rounded-full text-helper hover:text-foreground"
      onClick={onClose}
      startContent={
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      }
    />
  ) : null;
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className={cn("fixed inset-0 z-40 bg-black/40", backdropClassName)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {scrollBehavior === "outside" ? (
            <motion.div
              className={cn(
                "fixed inset-0 z-50 overflow-y-auto p-4",
                className,
              )}>
              <div className="flex min-h-full items-start justify-center">
                <motion.div
                  className={cn(
                    "rounded-lg border border-border bg-white p-6 shadow-sm",
                    sizeStyles[size],
                    contentClassName,
                  )}>
                  {CloseButton}
                  {children}
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={cn(
                "fixed left-1/2 top-1/2 z-50",
                "-translate-x-1/2 -translate-y-1/2",
                "h-[95dvh]", // ← fixed height always
                "overflow-hidden", // ← let children scroll internally
                "rounded-lg border border-border bg-white p-4 sm:p-6 shadow-sm",
                sizeStyles[size],
                className,
                contentClassName,
              )}>
              {CloseButton}
              {children}
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
