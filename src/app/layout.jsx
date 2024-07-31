import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Financify",
  description: "Calculate your investements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <main className=" bg-gray-100 dark:bg-gray-800 pt-10">{children}</main>
      </body>
    </html>
  );
}
