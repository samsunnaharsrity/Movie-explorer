import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(124,58,237,0.25),transparent_35%),linear-gradient(90deg,#080b16_5%,rgba(8,11,22,0.94)_40%,rgba(8,11,22,0.55)_75%,rgba(8,11,22,0.8))]" />

      <div className="relative mx-auto flex min-h-[720px] w-[92%] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Content */}
          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              Your Personal Entertainment Hub
            </div>

            <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
              Find Stories
              <span className="block">
                Worth{" "}
                <span className="text-violet-400">
                  Watching.
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 md:text-lg">
              Discover amazing TV shows, explore new stories,
              check ratings, and find something you'll love
              watching tonight.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/movies"
                className="rounded-xl bg-violet-600 px-7 py-4 text-center font-bold shadow-lg shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-700"
              >
                Explore Shows →
              </Link>

              <a
                href="#features"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-bold backdrop-blur transition hover:bg-white/10"
              >
                Discover More
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

              <div>
                <h3 className="text-2xl font-black">
                  20K+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Shows
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  50+
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Genres
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  100%
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Free
                </p>
              </div>

            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden h-[520px] lg:block">

            {/* Main Poster */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[430px] w-[285px] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-violet-900/40">

              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=85"
                alt="Movie theater"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-6 left-5">
                <span className="text-xs text-violet-300">
                  NOW SHOWING
                </span>

                <h3 className="mt-2 text-2xl font-black">
                  Endless Stories
                </h3>

                <div className="mt-3 text-sm text-yellow-400">
                  ⭐ 9.2
                </div>
              </div>
            </div>

            {/* Right Poster */}
            <div className="absolute right-4 top-16 h-64 w-44 rotate-[10deg] overflow-hidden rounded-2xl border border-white/10 opacity-60 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80"
                alt="Cinema"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Left Poster */}
            <div className="absolute bottom-12 left-0 h-56 w-40 rotate-[-12deg] overflow-hidden rounded-2xl border border-white/10 opacity-50 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=600&q=80"
                alt="Cinema screen"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Rating */}
            <div className="absolute bottom-20 right-0 z-20 rounded-2xl border border-white/10 bg-[#111727]/90 px-5 py-4 shadow-xl backdrop-blur-xl">
              <p className="text-xs text-gray-400">
                TOP RATED
              </p>

              <p className="mt-1 font-bold">
                ⭐ 9.8 / 10
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;