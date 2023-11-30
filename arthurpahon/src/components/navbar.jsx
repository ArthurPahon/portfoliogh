import React from "react";
import Logo from "../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="bg-black mb-8 w-full">
      <div className="flex items-center px-4 justify-between w-full">
        <div className="w-full h-[56px] pt-4 sm:pb-2 pb-4 flex items-center gap-2">
          <img
            src={Logo}
            alt="logo arthur pahon"
            loading="lazy"
            width={32}
            height={32}
            decoding="async"
            className="rounded-full bg-black border border-gray-border"
            style={{ color: "transparent" }}
          />
          <h1 className="text-white font-medium">Arthur Pahon</h1>
        </div>
      </div>
      <div className="p-4">
        <button className="text-white">Button 1</button>
        <button className="text-white">Button 2</button>
        <button className="text-white">Button 3</button>
      </div>
    </nav>
  );
};

export default Navbar;
