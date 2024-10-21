import React, { useState } from "react";
import {
  HiUsers,
  HiChartBar,
  HiCash,
  HiCog,
  HiOutlineMenuAlt1,
} from "react-icons/hi";
import ProfileDropdown from "../Common/ProfileDropdown";
import Header from "../Common/Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 shadow-lg transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between h-20 px-4 bg-gray-900">
          <h1
            className={`text-xl font-bold text-white transition-all duration-300 ${
              !sidebarOpen ? "hidden" : ""
            }`}
          >
            Hangout
          </h1>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <HiOutlineMenuAlt1 className="text-2xl" />
          </button>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors">
              <HiChartBar className="w-5 h-5 mr-2 text-white" />
              <span className={`${!sidebarOpen ? "hidden" : ""}`}>
                Overview
              </span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors">
              <HiUsers className="w-5 h-5 mr-2 text-white" />
              <span className={`${!sidebarOpen ? "hidden" : ""}`}>Users</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors">
              <HiCash className="w-5 h-5 mr-2 text-white" />
              <span className={`${!sidebarOpen ? "hidden" : ""}`}>Revenue</span>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 transition-colors">
              <HiCog className="w-5 h-5 mr-2 text-white" />
              <span className={`${!sidebarOpen ? "hidden" : ""}`}>
                Settings
              </span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <Header />

        {/* Content Area */}
        <div className="p-6 bg-gray-100 flex-1">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">
              Welcome to Your Dashboard!
            </h2>
            <p className="text-gray-600 mt-4">This is the main content area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
