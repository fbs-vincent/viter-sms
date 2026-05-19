import React from "react";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

const Header = ({ title = "", description = "", onToggle }) => {
  return (
    <>
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between">
          <div className="flex gap-5">
            <button
              id="mobileMenuBtn"
              onClick={onToggle}
              className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer pl-1 ml-1 duration-300 lg:hidden"
            >
              <FaBars />
              {/* <i className="fa-solid fa-bars"></i> */}
            </button>

            <div>
              <h2 id="pageTitle" className="text-2xl font-bold text-gray-800">
                {title}
              </h2>
              <p
                id="pageSubtitle"
                className="hidden lg:block text-sm text-gray-500 mt-1"
              >
                {description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 hover:text-gray-700 cursor-pointer">
              <span className="text-xl">
                <FaBell />
                {/* <i className="fas fa-bell"></i> */}
              </span>
            </button>
            <div className="w-px h-8 bg-gray-200"></div>
            <button className="flex items-center gap-2 cursor-pointer">
              <p className="text-sm text-gray-600 hidden sm:inline">Admin</p>
              <span className="text-2xl text-gray-500">
                <FaUserCircle />
                {/* <i className="fas fa-user-circle"></i> */}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
