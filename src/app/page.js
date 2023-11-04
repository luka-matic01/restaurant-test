//* Package imports

//* File imports
import Homepage from "@/components/Homepage/Homepage";
import Menu from "@/components/Common/Menu";
import About from "@/components/Common/About";
import Contact from "@/components/Common/Contact";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <Homepage />
        </div>

        <Menu />
        <About />
        <Contact />
      </div>{" "}
    </div>
  );
}