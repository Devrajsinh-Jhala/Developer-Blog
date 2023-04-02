"use client";
import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();
  return (
    <header className="mx-auto w-full">
      <Navbar />
      <img
        src={
          session
            ? session?.user?.image
            : "https://media.licdn.com/dms/image/C4D03AQGzOhPWOqYTQA/profile-displayphoto-shrink_200_200/0/1655304743647?e=1686182400&v=beta&t=5Qd7iGEGNE35PpEOo8VjEZJrJdwAxnpordgbgQsoqsE"
        }
        alt=""
        className="h-8 w-8 rounded-full object-contain"
      />
      {session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
