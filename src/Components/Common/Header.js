import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white h-20 px-4 bg-gray-900 shadow-md">
      <div className="text-lg font-semibold">Dashboard Overview</div>

      <nav className="flex justify-between items-center bg-[rgb(17 24 39)] p-4 text-white">
        <ProfileDropdown />
      </nav>
    </header>
  );
};

export default Header;
