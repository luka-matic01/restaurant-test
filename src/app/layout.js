import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Nav/NavigationBar";
import Footer from "@/components/Nav/Footer";

const playfair_display = Libre_Baskerville({
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
              <NavigationBar />
            </div>
            <div> {children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
