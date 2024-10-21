import React, { useState } from "react";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaFileInvoiceDollar,
  FaDollarSign,
  FaQuestionCircle,
} from "react-icons/fa";

const ProfileDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        <div className="avatar avatar-online">
          <img
            src="https://via.placeholder.com/150" // Replace with your avatar image URL
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="text-white">Madhav</div>
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <ul className="absolute right-0 mt-2 w-56 bg-[#2f3349] rounded-lg shadow-lg z-50 overflow-hidden">
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/account-settings"
            >
              <div className="avatar avatar-online">
                <img
                  src="https://via.placeholder.com/150" // Replace with your avatar image URL
                  alt="User Avatar"
                  className="rounded-full w-8 h-8"
                />
              </div>
              <div>
                <h6 className="mb-0 text-sm font-medium">Madhav</h6>
                <small className="text-gray-500">Admin</small>
              </div>
            </a>
          </li>
          <li className="border-t my-1"></li>
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/profile"
            >
              <FaUser className="text-gray-600" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/settings"
            >
              <FaCog className="text-gray-600" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/billing"
            >
              <FaFileInvoiceDollar className="text-gray-600" />
              <span>Billing</span>
              <span className="ml-auto badge bg-red-500 text-white text-xs px-2 rounded-full">
                4
              </span>
            </a>
          </li>
          <li className="border-t my-1"></li>
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/pricing"
            >
              <FaDollarSign className="text-gray-600" />
              <span>Pricing</span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item p-3 hover:bg-gray-300 flex items-center space-x-2"
              href="/faq"
            >
              <FaQuestionCircle className="text-gray-600" />
              <span>FAQ</span>
            </a>
          </li>
          <li className="border-t my-1"></li>
          <li className="p-3">
            <button className="bg-red-500 text-white flex justify-center items-center w-full py-2 rounded-md">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
