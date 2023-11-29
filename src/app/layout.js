import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/NavigationBar";
import Footer from "@/components/Nav/Footer";

const playfair_display = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Početna",
  description: "Početna stranica Restorana Hedonist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>
        <div className="flex flex-col">
          <div className="relative w-full">
            <div className="z-50">
              <Navbar />
            </div>
            <div className="z-20 w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
