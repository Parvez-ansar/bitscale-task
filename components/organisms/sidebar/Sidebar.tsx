"use client";

import { motion } from "motion/react";
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
            <RocketIcon className="text-[#CB912E]" />
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

const Sidebar = () => {
  return (
    <motion.aside
      className="w-sidebar shrink-0 border-r border-border bg-body flex flex-col"
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}>
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
                  }}>
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
    </motion.aside>
  );
};

export default Sidebar;
