import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-[92%] max-w-7xl items-center justify-between gap-5">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-extrabold"
        >
          <span className="text-2xl">🎬</span>
          <span>
            Movie<span className="text-violet-400">Explorer</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            Movies
          </NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/movies"
          className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-bold transition hover:bg-violet-700 hover:-translate-y-0.5"
        >
          Explore Movies
        </Link>
      </div>
    </header>
  );
}

export default Navbar;