import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? "text-white" : "text-gray-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[92%] max-w-7xl items-center justify-between gap-5">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-xl font-extrabold"
        >
          <span className="text-2xl">🎬</span>

          <span>
            Movie<span className="text-violet-400">Explorer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navClass}>
            Movies
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/movies"
          className="hidden rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-violet-700 md:block"
        >
          Explore Movies
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#080b16] px-[4%] py-5 md:hidden">
          <nav className="flex flex-col gap-4">

            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              Movies
            </NavLink>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-violet-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-700"
            >
              Explore Movies
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;