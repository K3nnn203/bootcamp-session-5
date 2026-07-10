import { NavLink } from "react-router";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Campus Club Finder
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 mr-auto ml-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-amber-300" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/clubs"
            className={({ isActive }) =>
              isActive ? "text-amber-300" : "text-white"
            }
          >
            Clubs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-amber-300" : "text-white"
            }
          >
            About
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 gap-3 md:hidden">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/clubs">Clubs</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      )}
    </nav>
  );
}