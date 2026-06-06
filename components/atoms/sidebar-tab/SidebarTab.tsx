"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import ChevronRightIcon from "../icons/ChevronRightIcon";

interface SidebarTabProps {
  href: string;
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  badge?: React.ReactNode;
}

const SidebarTab = ({
  href,
  label,
  startIcon,
  endIcon,
  disabled = false,
  className,
  badge,
}: SidebarTabProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-disabled ${className}`}>
        <span>{startIcon}</span>
        <span className="flex-1 truncate text-sm font-medium">{label}</span>
        {badge}
        {endIcon}
      </div>
    );
  }

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative flex items-center gap-2 rounded-md px-2.5 py-2 text-sm transition-colors duration-150 ${
        isActive
          ? "text-tab-active font-medium"
          : "text-tab hover:text-foreground"
      } ${className}`}>
      {/* Animated background pill */}
      <AnimatePresence>
        {isActive && (
          <motion.span
            layoutId="sidebar-active-pill"
            className="absolute inset-0 rounded-md bg-subtle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Hover background — only when not active */}
      {!isActive && (
        <motion.span
          className="absolute inset-0 rounded-md bg-subtle opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.15 }}
        />
      )}

      <span className={`relative z-10 ${!isActive ? "text-helper" : ""}`}>
        {startIcon}
      </span>

      <span className="relative z-10 flex-1 truncate text-sm font-medium">
        {label}
      </span>

      {badge}

      <AnimatePresence>
        {isActive && (
          <motion.span
            className="relative z-10"
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}>
            <ChevronRightIcon />
          </motion.span>
        )}
      </AnimatePresence>

      {endIcon && <span className="relative z-10">{endIcon}</span>}
    </Link>
  );
};

export default SidebarTab;
