"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BranchLogo from "@/components/atoms/brand-logo/BranchLogo";
import SidebarTab from "@/components/atoms/sidebar-tab/SidebarTab";
import DashboardIcon from "@/components/atoms/icons/DashboardIcon";
import PlaybookIcon from "@/components/atoms/icons/PlaybookIcon";
import RocketIcon from "@/components/atoms/icons/RocketIcon";
import IntegrationsIcon from "@/components/atoms/icons/IntegrationsIcon";
import DocumentationIcon from "@/components/atoms/icons/DocumentationIcon";
import SettingIcon from "@/components/atoms/icons/SettingIcon";
import GetSupport from "@/components/molecules/GetSupport/GetSupport";
import GMTSpaces from "@/components/molecules/GMTSpaces/GMTSpaces";

const NAV_SECTIONS = [
  {
    label: "Home",
    items: [
      { href: "/", label: "My Dashboard", icon: <DashboardIcon /> },
      {
        href: "/playbook",
        label: "Playbooks",
        icon: <PlaybookIcon />,
        disabled: true,
        badge: (
          <span className="rounded-xl bg-[#FBF3DB] px-3 py-1.5">
            <RocketIcon className="text-warning" />
          </span>
        ),
      },
      {
        href: "/integrations",
        label: "Integrations",
        icon: <IntegrationsIcon />,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        href: "/documentation",
        label: "Documentation",
        icon: <DocumentationIcon />,
      },
      { href: "/settings", label: "Settings", icon: <SettingIcon /> },
    ],
  },
];

// ── Sidebar Content ─────────────────────────────────────────

function SidebarContent({ onNavClick }: { onNavClick?: () => void }) {
  return (
    <>
      <div className="h-header min-h-header flex items-center border-b border-border px-5">
        <BranchLogo className="text-black" href="/" />
      </div>

      <div className="flex flex-col overflow-y-auto pb-4 grow">
        <GMTSpaces wrapperClassName="border-b border-border" />

        <div className="flex flex-col gap-4 p-2 pt-3">
          {NAV_SECTIONS.map((section, sectionIndex) => (
            <motion.div
              key={section.label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.05 + sectionIndex * 0.05,
              }}>
              <span className="px-2.5 py-1.5 text-xs font-medium text-helper">
                {section.label}
              </span>

              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                    delay: 0.1 + sectionIndex * 0.05 + itemIndex * 0.04,
                  }}
                  onClick={onNavClick}>
                  <SidebarTab
                    href={item.href}
                    label={item.label}
                    startIcon={item.icon}
                    disabled={item.disabled}
                    badge={item.badge}
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grow" />
        <GetSupport className="px-2" />
      </div>
    </>
  );
}

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar — hidden below lg */}
      <motion.aside
        className="hidden lg:flex w-sidebar shrink-0 border-r border-border bg-body flex-col"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}>
        <SidebarContent />
      </motion.aside>

      {/* Mobile hamburger — visible below lg */}
      <button
        className="lg:hidden fixed top-3 left-4 z-2 flex items-center justify-center w-8 h-8 rounded-md bg-body border border-border shadow-sm"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 4h12M2 8h12M2 12h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 w-sidebar bg-body border-r border-border flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-helper hover:text-foreground"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <SidebarContent onNavClick={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
