"use client";
import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
// import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  // const { data: session } = useSession();
  return (
    <header className="mx-auto w-full">
      <Navbar />
      {/* {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )} */}
    </header>
  );
};

export default Header;
