"use client";
import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  let Links = [{ name: "About", links: "/about" }];

  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10">
        <Link href={"/"}>
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <h1>Developer Grind</h1>
          </div>
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl -mt-2 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open === true ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`md:flex text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full z-[-1] md:pl-0  md:w-auto md:items-center transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          } `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-7 font-inter"
            >
              <a
                className="text-gray-800 hover:text-[#e15353] font-semibold duration-500"
                href={link.links}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex  md:ml-4 flex-col items-center md:flex-row gap-5 md:gap-0">
            {/* <Button>Checkout more blogs</Button> */}
            <a
              className="flex items-center justify-center"
              target={"_blank"}
              rel={"noopener noreferrer"}
              href="https://devraj-jhala.hashnode.dev/"
            >
              <Button className="cursor-pointer hover:underline  flex">
                Checkout more Blogs
              </Button>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
