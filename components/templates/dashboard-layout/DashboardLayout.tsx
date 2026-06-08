"use client";
import Header from "@/components/organisms/header/Header";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { motion } from "motion/react";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <motion.main
          className="h-[calc(100dvh-var(--layout-header-height))] p-4 lg:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}>
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
