import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

import { Footer, Header } from "@/components";
import { domAnimation, LazyMotion } from "@/libs/framer-motion";

import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Poppins-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "StartupKings",
  description:
    "Hire Pre-Vetted Remote Developers, Designers & Product Managers With World Class Technical And Communication Skills, Without Worrying About Crazy Fees Or The Legal Hassle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
