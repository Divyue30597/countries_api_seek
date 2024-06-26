import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/app/context/ThemeContext";
import Navbar from "./components/Navbar/navbar";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "World Countries",
  description: "Generated by create next app",
};

const themeToggleJS = `
  (function () {
    let currentTheme = 'light';
    if (localStorage.getItem('theme')) {
      currentTheme = localStorage.getItem('theme');
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      currentTheme = "dark";
    } 

    document.documentElement.setAttribute("color-scheme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: themeToggleJS,
          }}
        ></script>
      </head>
      <body id="body" className={nunito_sans.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
