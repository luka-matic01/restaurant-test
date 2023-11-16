"use client";
import MenuComponent from "@/components/Common/Menu/Menu";
import Footer from "@/components/Nav/Footer";

export default function Menu() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <MenuComponent />
      <Footer />
    </div>
  );
}
