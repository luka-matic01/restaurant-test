import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Nav/NavigationBar";

const playfair_display = Nanum_Myeongjo({
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
          <div className="relative">
            <div className="z-50">
              <Navbar />
            </div>
            <div className="z-20"> {children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
