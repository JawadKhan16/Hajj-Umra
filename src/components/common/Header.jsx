'use client';



import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white shadow-md py-4 relative">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#8b5e3c]">
          PilgrimPath
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#5a3e2b]">
          <Link href="/" className="hover:text-[#a97449]">Home</Link>
          <Link href="/Service" className="hover:text-[#a97449]">Services</Link>
          <Link href="/About" className="hover:text-[#a97449]">About Us</Link>
          <Link href="/contact" className="hover:text-[#a97449]">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button ref={buttonRef} className="md:hidden text-[#5a3e2b]" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-4 mt-2 space-y-2 text-sm font-medium text-[#5a3e2b] absolute bg-white w-full left-0 z-50 shadow-md py-4"
        >
          <Link href="/" onClick={closeMenu} className="block hover:text-[#a97449]">Home</Link>
          <Link href="/Service" onClick={closeMenu} className="block hover:text-[#a97449]">Services</Link>
          <Link href="/About" onClick={closeMenu} className="block hover:text-[#a97449]">About Us</Link>
          <Link href="/contact" onClick={closeMenu} className="block hover:text-[#a97449]">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
