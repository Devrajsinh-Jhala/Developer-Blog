import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="mx-auto w-full">
      <Navbar />
      {/* <Card /> */}
    </header>
  );
};

export default Header;
