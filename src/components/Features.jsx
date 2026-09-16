function Features() {
  const features = [
    {
      icon: "🔎",
      title: "Smart Search",
      description:
        "Quickly search thousands of TV shows by title and discover something new.",
    },
    {
      icon: "🎬",
      title: "Explore Shows",
      description:
        "Browse interesting shows fetched directly from the TVMaze API.",
    },
    {
      icon: "⭐",
      title: "Detailed Info",
      description:
        "Check ratings, genres, release dates, summaries and more.",
    },
  ];

  return (
    <section
      id="features"
      className="relative bg-[#0d1220] py-24"
    >
      <div className="mx-auto w-[92%] max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Everything You Need
            <span className="block text-violet-400">
              In One Place
            </span>
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Search, explore and discover your next
            favorite show with a simple experience.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-[#111727] p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-3xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;