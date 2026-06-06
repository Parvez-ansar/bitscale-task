import Header from "@/components/organisms/header/Header";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="h-[calc(100vh-var(--layout-header-height))] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
