import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/src/components/shared/Sidebar";
import { SidebarContextProvider } from "@/src/contexts/SidebarContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lutex Demo",
  description: "Lutex demo banks page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex antialiased`}
      >
        <SidebarContextProvider>
          <div className="flex w-full">
            <div className="sticky top-0 hidden h-screen md:flex">
              <Sidebar />
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
