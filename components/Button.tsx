"use client";
import React from "react";

const Button = (props: any) => {
  return (
    <button className="bg-[#e15353] rounded-full text-xs sm:text-sm text-white font-inter  py-2 px-4 md:ml-4 hover:bg-indogo-400 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
