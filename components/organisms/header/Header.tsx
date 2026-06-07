"use client";

import Avatar from "@/components/atoms/avatar/Avatar";
import { Button } from "@/components/atoms/button/Button";
import DatabaseIcon from "@/components/atoms/icons/DatabaseIcon";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
        delay: 0.05,
      }}
      className="h-header border-b border-border bg-body flex items-center px-5 gap-3">
      {/* Spacer for mobile hamburger */}
      <div className="w-8 shrink-0 lg:hidden" />

      <div className="flex items-center gap-3 ml-auto">
        <div className="p-1.5 px-2 pl-2.5 bg-success/10 flex items-center gap-2 rounded-[10.5px] whitespace-nowrap">
          <DatabaseIcon />
          <span className="text-sm text-btn-accent font-medium">
            450000/5500000
          </span>
          <Button
            variant="primary"
            className="bg-btn-accent h-[22px] text-xs font-medium px-2 whitespace-nowrap">
            Booster Plan
          </Button>
        </div>

        <Avatar
          src="/images/avatars/avatar-1.png"
          alt="Avatar"
          className="w-7 h-7 shrink-0"
        />
      </div>
    </motion.header>
  );
};

export default Header;
