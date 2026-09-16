function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050711]">
      <div className="mx-auto flex w-[92%] max-w-7xl flex-col justify-between gap-8 py-12 md:flex-row md:items-center">
        
        <div>
          <h3 className="mb-2 text-xl font-bold">
            🎬 MovieExplorer
          </h3>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            Discover amazing movies and TV shows from around
            the world.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-gray-600">
        © 2026 MovieExplorer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;