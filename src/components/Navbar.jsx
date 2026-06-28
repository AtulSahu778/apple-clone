import { useState } from "react"
import { appleImg } from "../utlis"
import { searchImg } from "../utlis"
import { bagImg } from "../utlis"
import { navLists } from "../constants"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex flex-col justify-between items-center relative z-50">
      <nav className="flex w-full screen-max-width items-center">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        {/* Desktop nav links */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        {/* Right icons + hamburger */}
        <div className="flex items-center gap-5 sm:gap-7 ml-auto">
          <img src={searchImg} alt="Search" width={18} height={18} className="cursor-pointer" />
          <img src={bagImg} alt="bag" width={18} height={18} className="cursor-pointer" />

          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden flex flex-col gap-[5px] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div 
        className={`sm:hidden absolute top-full left-0 w-full bg-zinc/95 backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden border-b border-neutral-800 ${
          menuOpen ? "max-h-64 py-6 opacity-100" : "max-h-0 py-0 opacity-0 border-b-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-base font-medium cursor-pointer text-gray hover:text-white transition-all py-1 w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              {nav}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar