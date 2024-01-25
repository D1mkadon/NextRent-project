"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100vh] flex flex-col">
          <div>
            <AuthContextProvider>
              <Navbar />
              {children}
            </AuthContextProvider>
          </div>
          <div className="flex-auto "></div>
          <footer className="bg-sky-500 mt-6">Footer</footer>
        </div>
      </body>
    </html>
  );
}
