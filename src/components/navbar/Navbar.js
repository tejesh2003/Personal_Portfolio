import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[5rem] fixed top-0 left-0 z-50 bg-[#181A1D] flex items-center shadow-md">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-300">My Portfolio</div>

          {/* Desktop Navigation */}
          <ul className="hidden mdl:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
            {/* Resume Button - Desktop */}
            <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              <a
                href="https://drive.google.com/file/d/1qTMarZPUzZ9mnmG2xYIkh6jnpkDDB-M6/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            {showMenu ? <MdClose /> : <FiMenu />}
          </span>

          {/* Mobile Navigation Menu (Dropdown-style) */}
          {showMenu && (
            <div className="absolute top-[4.5rem] right-4 w-[200px] bg-[#181A1D] rounded-lg shadow-lg p-3">
              <ul className="flex flex-col gap-3">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li
                    key={_id}
                    className="text-base font-normal text-gray-400 cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
                {/* Resume Button - Mobile */}
                <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                  <a
                    href="https://drive.google.com/file/d/1qTMarZPUzZ9mnmG2xYIkh6jnpkDDB-M6/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Margin below navbar */}
      <div className="mt-[4rem]"></div> {/* Adjust margin size if needed */}
    </>
  );
};

export default Navbar;
