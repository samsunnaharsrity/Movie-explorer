import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080b16] px-5 py-24 sm:py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="absolute -left-20 top-10 h-40 w-40 rounded-full border border-violet-500/10" />

      <div className="absolute -right-20 bottom-10 h-52 w-52 rounded-full border border-violet-500/10" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-5xl">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111727] via-[#0f1423] to-[#11101f] px-6 py-16 text-center shadow-2xl shadow-violet-950/20 sm:px-10 md:py-20">

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Your Next Great Story
            <span className="block text-violet-400">
              Is Waiting.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-md">
            Explore amazing TV shows, discover new favorites,
            and find something worth watching today.
          </p>

          {/* Button */}
          <Link
            to="/movies"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-bold text-white shadow-xl shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-700 hover:shadow-violet-600/30"
          >
            <span>Explore Shows</span>

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Small Text */}
          <p className="mt-5 text-sm text-gray-600">
            Discover. Explore. Enjoy.
          </p>

        </div>
      </div>
    </section>
  );
}

export default CTA;
