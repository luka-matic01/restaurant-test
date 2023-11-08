"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  const backgroundColor = pathname === "/" ? "transparent" : "black";

  return (
    <nav
      className={`bg-${backgroundColor} dark:bg-transparent z-50 relative uppercase`}
    >
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 lg:p-6 lg:px-12`}
      >
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="/restaurant-logo.png"
            alt="Hedonist logo"
            className="hidden lg:block"
            width={400}
            height={100}
          />

          <Image
            src="/restaurant-logo1.png"
            alt="Hedonist logo"
            className="lg:hidden block"
            width={100}
            height={100}
          />
          <h1 className="text-white text-[24px] block lg:hidden">HEDONIST</h1>
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)} // Toggle the navbarOpen state
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className={`md:flex md:w-auto md:order-1 ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          {/* Your menu items */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-white  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#f28274] font-bold md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Početna
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f28274] font-bold md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Jelovnik
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f28274] font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Galerija
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f28274] font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                O nama
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f28274] font-bold md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
