"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

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

          <Footer />
        </div>
      </body>
    </html>
  );
}
