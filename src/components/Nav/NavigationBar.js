"use client";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavbar(false);
  }, []);

  const backgroundColor =
    pathname === "/" && navbar === false ? "transparent" : "[#36394c]";
  return (
    <nav
      className={`w-full relative bg-transparent ${
        pathname === "/" && "absolute  top-0 left-0 right-0"
      } z-50`}
    >
      <div className="justify-between items-center px-4 md:text-[15px] lg:text-[16px] mx-auto uppercase lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/restaurant-logo.png"
                alt="Hedonist logo"
                width={400}
                height={100}
              />
              {/* <Image
                src="/restaurant-logo1.png"
                alt="Hedonist logo"
                className="lg:hidden block"
                width={100}
                height={100}
              /> */}
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose size={25} className="text-white" />
                ) : (
                  <AiOutlineMenu size={25} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1  justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "p-12 lg:p-0 block" : "hidden"
            }`}
          >
            <ul
              className="h-screen lg:h-auto space-y-10 lg:space-y-0 items-center justify-center lg:flex "
              style={{ zIndex: 999 }}
            >
              <li className="  text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0     lg:hover:bg-transparent">
                <Link
                  href="/"
                  onClick={() => setNavbar(!navbar)}
                  className={`hover:decoration-[#f28274] hover:underline ${
                    pathname === "/" ? "text-[#f28274]" : "text-white"
                  }`}
                >
                  Početna
                </Link>
              </li>
              <li className="  text-white py-2 px-6 text-center  border-b-2 lg:border-b-0     lg:hover:bg-transparent">
                <Link
                  href="/menu"
                  onClick={() => setNavbar(!navbar)}
                  className={`hover:decoration-[#f28274] hover:underline ${
                    pathname === "/menu" ? "text-[#f28274]" : "text-white"
                  }`}
                >
                  Meni
                </Link>
              </li>
              <li className="  text-white py-2 px-6 text-center  border-b-2 lg:border-b-0     lg:hover:bg-transparent">
                <Link
                  href="/gallery"
                  onClick={() => setNavbar(!navbar)}
                  className={`hover:decoration-[#f28274] hover:underline ${
                    pathname === "/gallery" ? "text-[#f28274]" : "text-white"
                  }`}
                >
                  Galerija
                </Link>
              </li>
              <li className="  text-white py-2 px-6 text-center  border-b-2 lg:border-b-0     lg:hover:bg-transparent">
                <Link
                  href="/about"
                  onClick={() => setNavbar(!navbar)}
                  className={`hover:decoration-[#f28274] hover:underline ${
                    pathname === "/about" ? "text-[#f28274]" : "text-white"
                  }`}
                >
                  O nama
                </Link>
              </li>
              <li className="  text-white py-2 px-6 text-center  border-b-2 lg:border-b-0     lg:hover:bg-transparent">
                <Link
                  href="/contact"
                  onClick={() => setNavbar(!navbar)}
                  className={`hover:decoration-[#f28274] hover:underline ${
                    pathname === "/contact" ? "text-[#f28274]" : "text-white"
                  }`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
