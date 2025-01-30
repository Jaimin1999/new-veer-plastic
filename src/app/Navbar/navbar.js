"use client";

import React, { useState, useEffect } from "react";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 w-full h-20 px-6 md:px-12 transition-all">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-full text-white">
        <Link href={"/"} className="text-2xl font-bold">
          Veer Plastic Logo
        </Link>
        <nav
          className={`fixed inset-0 bg-gray-800 bg-opacity-90 backdrop-blur-lg flex flex-col items-center justify-center transform transition-transform duration-300 md:static md:flex md:flex-row md:bg-transparent md:transform-none ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <li className="mb-8 md:mb-0">
              <Link href={"/"} className="text-lg px-4 py-2 rounded-lg hover:bg-gray-700" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="mb-8 md:mb-0">
              <Link href={"about"} className="text-lg px-4 py-2 rounded-lg hover:bg-gray-700" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="mb-8 md:mb-0">
              <Link href={"hdpe-bottles"} className="text-lg px-4 py-2 rounded-lg hover:bg-gray-700" onClick={closeMenu}>
                Product & Services
              </Link>
            </li>
            <li className="mb-8 md:mb-0">
              <Link href={"hdpe-bottles"} className="text-lg px-4 py-2 rounded-lg hover:bg-gray-700" onClick={closeMenu}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <div className="text-2xl cursor-pointer md:hidden z-50 text-white" onClick={menuToggleHandler}>
          {menuOpen ? <IconX size={32} /> : <IconMenuDeep size={32} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
