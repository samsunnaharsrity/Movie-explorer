import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[680px] overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#080b16] via-[#080b16]/90 to-[#080b16]/40" />

        <div className="relative mx-auto flex min-h-[680px] w-[92%] max-w-7xl items-center">
          <div className="max-w-3xl py-24">
            
            <span className="text-xs font-bold tracking-[3px] text-violet-400">
              🎬 YOUR ENTERTAINMENT DESTINATION
            </span>

            <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
              Discover Your Next
              <span className="block text-violet-400">
                Favorite Show
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Explore amazing TV shows, discover new stories,
              and find your next favorite entertainment from
              around the world.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/movies"
                className="rounded-lg bg-violet-600 px-7 py-4 text-center font-bold transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Explore Now →
              </Link>

              <a
                href="#features"
                className="rounded-lg border border-white/20 px-7 py-4 text-center font-bold transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-[#0d1220] py-24"
      >
        <div className="mx-auto w-[92%] max-w-7xl">
          
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[3px] text-violet-400">
              WHY MOVIEEXPLORER
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Everything You Need
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Search, explore and discover your favorite shows
              in one simple application.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            
            <div className="rounded-2xl border border-white/10 bg-[#111727] p-8 transition hover:-translate-y-2 hover:border-violet-500/50">
              <div className="mb-5 text-4xl">🔎</div>

              <h3 className="text-xl font-bold">
                Easy Search
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Search for your favorite movies and TV shows
                quickly by title.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111727] p-8 transition hover:-translate-y-2 hover:border-violet-500/50">
              <div className="mb-5 text-4xl">🎞️</div>

              <h3 className="text-xl font-bold">
                Explore Shows
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Browse shows fetched directly from the TVMaze
                API.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111727] p-8 transition hover:-translate-y-2 hover:border-violet-500/50">
              <div className="mb-5 text-4xl">⭐</div>

              <h3 className="text-xl font-bold">
                Detailed Information
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                View ratings, genres, release dates and
                descriptions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;