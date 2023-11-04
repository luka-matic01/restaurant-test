import { Playfair_Display } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Nav/NavigationBar";

const playfair_display = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Početna",
  description: "Početna stranica Restorana Hedonist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair_display.className}>
        <div className="relative">
          <div className="z-50">
            <NavigationBar />
          </div>
          <div> {children}</div>
        </div>
      </body>
    </html>
  );
}
