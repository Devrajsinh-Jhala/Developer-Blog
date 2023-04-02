"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className=" w-full sticky top-0 left-0">
      <div className="flex items-center justify-between bg-white py-4 px-10">
        <Link href={"/"}>
          <div className="font-bold text-base sm:text-2xl cursor-pointer flex items-center">
            <h1>Developer Grind</h1>
          </div>
        </Link>
        {/* <ul
          className={`md:flex text-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full z-50 md:pl-0  md:w-auto md:items-center transition-all duration-500 ease-in ${
            open ? "top-14" : "top-[-490px]"
          } `}
        >
          <div className="flex  md:ml-4 flex-col items-center md:flex-row gap-5 md:gap-0">
            {/* <Button>Checkout more blogs</Button> 
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
        </ul> */}

        <div className="flex  md:ml-4 items-center md:flex-row gap-5 md:gap-0">
          {session ? (
            <div onClick={() => signOut()}>
              <img
                className="h-8 w-8 object-contain rounded-full cursor-pointer"
                src={
                  session.user?.image
                    ? session.user.image!
                    : "https://www.pngkey.com/png/detail/52-523516_empty-profile-picture-circle.png"
                }
                alt={session.user?.name!}
              />
            </div>
          ) : (
            <svg
              onClick={() => signIn()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          )}
          {/* <Button>Checkout more blogs</Button> */}
          <a
            className="flex items-center justify-center"
            target={"_blank"}
            rel={"noopener noreferrer"}
            href="https://devraj-jhala.hashnode.dev/"
          >
            <Button className="cursor-pointer hover:underline  flex">
              Blogs
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
