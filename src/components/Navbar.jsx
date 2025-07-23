import { useState } from "react";

import { close, CRFQ, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <img
        src={CRFQ}
        alt="crfq"
        className="w-[200px] h-[40px] object-contain"
      />

      {/* Menú Desktop */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`group font-poppins cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-secondary font-semibold"
                : "text-dimWhite font-regular"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
            <div className="h-0.5 bg-secondary scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
          </li>
        ))}
      </ul>

      {/* Menú Mobile */}
      <div className="sm:hidden flex justify-end items-center relative">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain z-20"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar Mobile */}
        <div
          className={`fixed top-16 right-0 bg-black-gradient rounded-xl p-6 min-w-[140px] shadow-lg transition-transform duration-300 ease-in-out z-10 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="list-none flex flex-col items-start">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } mb-4 last:mb-0`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Cierra menú al clicar
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
