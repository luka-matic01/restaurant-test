"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const pathname = usePathname();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== undefined) {
        if (window.scrollY >= 90) {
          setColor("#ffffff");
          setTextColor("#000000");
        } else {
          setColor("transparent");
          setTextColor("#ffffff");
        }
      }
    };
    if (typeof window !== undefined) {
      window.addEventListener("scroll", changeColor);
    }
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed  left-0 top-0 w-full z-50 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src="/restaurant-logo.png"
            alt="Hedonist logo"
            width={400}
            height={100}
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
          <li
            className={`${
              pathname === "/" ? "text-[#f28274]" : `text-[${textColor}]`
            } p-4 hover:decoration-[#f28274] hover:underline font-bold`}
          >
            <Link href="/">Početna</Link>
          </li>
          <li
            className={`${
              pathname === "/meni" ? "text-[#f28274]" : `text-[${textColor}]`
            } p-4 hover:decoration-[#f28274] hover:underline font-bold`}
          >
            <Link href="/meni">Meni</Link>
          </li>
          <li
            className={`${
              pathname === "/galerija"
                ? "text-[#f28274]"
                : `text-[${textColor}]`
            } p-4 hover:decoration-[#f28274] hover:underline font-bold`}
          >
            <Link href="/galerija">Galerija</Link>
          </li>
          <li
            className={`${
              pathname === "/o-nama" ? "text-[#f28274]" : `text-[${textColor}]`
            } p-4 hover:decoration-[#f28274] hover:underline font-bold`}
          >
            <Link href="/o-nama">O nama</Link>
          </li>
          <li
            className={`${
              pathname === "/kontakt" ? "text-[#f28274]" : `text-[${textColor}]`
            } p-4 hover:decoration-[#f28274] hover:underline font-bold`}
          >
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose
              size={30}
              style={{ color: `${textColor}` }}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{ color: `${textColor}` }}
              className="cursor-pointer"
            />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute flex-col top-0 left-0 right-0 bottom-0 flex justify-between pb-6 pt-3 md:pt-4 items-center w-full h-screen bg-[#36394c] text-center ease-in duration-300"
              : "lg:hidden absolute flex-col top-0 left-[-100%] right-0 bottom-0 flex justify-between pb-6 pt-4 items-center w-full h-screen bg-[#36394c] text-center ease-in duration-300"
          }
        >
          <Image
            src="/restaurant-logo.png"
            alt="Hedonist logo"
            width={400}
            height={100}
          />
          <ul>
            <li
              onClick={handleNav}
              className={`${
                pathname === "/" && "text-[#f28274]"
              } p-4 text-4xl hover:decoration-[#f28274] hover:underline`}
            >
              <Link href="/">Početna</Link>
            </li>
            <li
              onClick={handleNav}
              className={`${
                pathname === "/meni" && "text-[#f28274]"
              } p-4 text-4xl hover:decoration-[#f28274] hover:underline`}
            >
              <Link href="/meni">Meni</Link>
            </li>
            <li
              onClick={handleNav}
              className={`${
                pathname === "/galerija" && "text-[#f28274]"
              } p-4 text-4xl hover:decoration-[#f28274] hover:underline`}
            >
              <Link href="/galerija">Galerija</Link>
            </li>
            <li
              onClick={handleNav}
              className={`${
                pathname === "/o-nama" && "text-[#f28274]"
              } p-4 text-4xl hover:decoration-[#f28274] hover:underline`}
            >
              <Link href="/o-nama">O nama</Link>
            </li>{" "}
            <li
              onClick={handleNav}
              className={`${
                pathname === "/kontakt" && "text-[#f28274]"
              } p-4 text-4xl hover:decoration-[#f28274] hover:underline`}
            >
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center w-full">
            <Image src="/line.png" width={120} height={2} alt="linija" />
            <h1 className="text-white text-lg">since 2020</h1>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/restoranhedonist/"
              className=" bg-[#f28274] cursor-pointer p-3 rounded-full"
            >
              <AiFillInstagram size={25} className="text-white" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/restoranhedonist"
              className=" bg-[#f28274] p-3 rounded-full"
            >
              <AiFillFacebook size={25} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
