"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <img src="/assets/Logo.svg" alt="Logo" className="h-12" />

      {/* Menu desktop */}
      <div className="hidden md:flex gap-6 text-white font-medium items-center">
        <a href="./" className="cursor-pointer hover:text-gray-500">Home</a>
        <a href="#about" className="cursor-pointer hover:text-gray-500">About</a>
        <a href="#contact" className="cursor-pointer hover:text-gray-500">Contact</a>
        <button className="bg-[#977656] hover:bg-[#977756b1] text-white font-bold py-2 px-4 rounded">
          Schedule
        </button>
      </div>

      {/* Botão de menu para mobile */}
      <button
        className="md:hidden relative z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full  flex flex-col items-center py-4 md:hidden">
          <a href="./" className="py-2 text-white hover:text-gray-500">Home</a>
          <a href="#about" className="py-2 text-white hover:text-gray-500">About</a>
          <a href="#contact" className="py-2 text-white hover:text-gray-500">Contact</a>
          <button className="bg-[#977656] hover:bg-[#977756b1] text-white font-bold py-2 px-4 rounded mt-2">
            Schedule
          </button>
        </div>
      )}
    </nav>
  );
}

  