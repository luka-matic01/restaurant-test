//* Package imports

//* File imports
import Homepage from "@/components/Homepage/Homepage";
import About from "@/components/Common/About";
import Contact from "@/components/Common/Contact";
import Footer from "@/components/Nav/Footer";
import MainDishes from "@/components/Homepage/MainDishes";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <Homepage />
        </div>

        <div className="relative w-full">
          <MainDishes />
        </div>

        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
