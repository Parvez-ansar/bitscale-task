"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────

export interface FilterAccordionItem {
  id: string;
  icon?: React.ReactNode;
  title: string;
  placeholder?: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface FilterAccordionProps {
  items: FilterAccordionItem[];
  multiple?: boolean;
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  gridClassName?: string;
}

// ── Chevron ────────────────────────────────────────────────

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="shrink-0 text-heading">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 5L7 9L11 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

// ── Single Item ────────────────────────────────────────────

interface FilterAccordionItemProps {
  item: FilterAccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

function FilterAccordionItemComponent({
  item,
  isOpen,
  onToggle,
  itemClassName,
  triggerClassName,
  contentClassName,
}: FilterAccordionItemProps) {
  return (
    <div
      className={cn(
        "p-4 overflow-hidden border-b border-border",
        itemClassName,
      )}>
      {/* Trigger */}
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-3 text-left",
          triggerClassName,
        )}>
        <div className="flex items-center gap-2">
          {item.icon && <span className="shrink-0 text-tab">{item.icon}</span>}
          <span className="text-sm font-semibold text-foreground">
            {item.title}
          </span>
        </div>
        <Chevron isOpen={isOpen} />
      </button>

      {/* Placeholder — always visible */}
      {item.placeholder && (
        <p className="mt-1 text-xs text-helper">{item.placeholder}</p>
      )}

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className={cn("pt-3", contentClassName)}>{item.content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Root ───────────────────────────────────────────────────

export function FilterAccordion({
  items,
  multiple = true,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  gridClassName,
}: FilterAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    items.filter((i) => i.defaultOpen).map((i) => i.id),
  );

  const toggle = (id: string) => {
    if (multiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("grid grid-cols-1", gridClassName, className)}>
      {items.map((item) => (
        <FilterAccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
          itemClassName={itemClassName}
          triggerClassName={triggerClassName}
          contentClassName={contentClassName}
        />
      ))}
    </div>
  );
}
