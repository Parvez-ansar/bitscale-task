"use client";

import { motion } from "motion/react";
import { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0].value);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            onClick={() => handleClick(tab.value)}
            className={`relative px-5 pb-3 text-sm font-medium transition-colors duration-150 border-b border-border box-border ${
              isActive ? "text-tab-active" : "text-helper hover:text-tab"
            }`}>
            {tab.label}

            {isActive && (
              <motion.span
                layoutId="tab-underline"
                className="absolute -bottom-px left-0 right-0 h-px bg-tab-active z-1"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
