import type { Metadata } from "next";
import "./globals.css";
import DashboardLayout from "@/components/templates/dashboard-layout/DashboardLayout";

export const metadata: Metadata = {
  title: "Bitscale",
  description: "Bitscale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-body text-foreground">
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
