import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div
      className={` w-full md:w-[850px] mx-auto rounded-xl px-7 py-6 mt-10 mb-10 flex flex-col text-white bg-gray-700 items-start justify-start`}
    >
      <p className="text-[26px] font-inter leading-8 mt-4 tracking-[-0.5px] font-bold">
        Developer Grind
      </p>
      <p className={`text-[15px]  font-inter  leading-6 mt-4 pr-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ex
        accusantium laborum suscipit ab deleniti aliquid dolor eum, quo,
        reprehenderit quos sint ullam officiis ad nesciunt incidunt soluta
        eligendi natus.
      </p>
    </div>
  );
};

export default Card;
