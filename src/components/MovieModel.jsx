function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const poster =
    movie.image?.original ||
    movie.image?.medium ||
    "https://placehold.co/600x800/151b2d/ffffff?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const genres =
    movie.genres?.length > 0
      ? movie.genres.join(", ")
      : "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111727] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-lg transition hover:bg-violet-600"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[300px_1fr]">
          
          {/* Image */}
          <div className="h-[400px] md:h-full">
            <img
              src={poster}
              alt={movie.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-7 md:p-10">
            <span className="text-xs font-bold tracking-[3px] text-violet-400">
              SHOW DETAILS
            </span>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              {movie.name}
            </h2>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-300">
              <span className="rounded-full bg-white/5 px-3 py-1.5">
                ⭐ {rating}
              </span>

              <span className="rounded-full bg-white/5 px-3 py-1.5">
                📅 {year}
              </span>

              <span className="rounded-full bg-white/5 px-3 py-1.5">
                🎭 {genres}
              </span>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-bold">
                Overview
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {summary}
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-400">
              {movie.language && (
                <p>
                  <strong className="text-white">
                    Language:
                  </strong>{" "}
                  {movie.language}
                </p>
              )}

              {movie.status && (
                <p>
                  <strong className="text-white">
                    Status:
                  </strong>{" "}
                  {movie.status}
                </p>
              )}

              {movie.network?.name && (
                <p>
                  <strong className="text-white">
                    Network:
                  </strong>{" "}
                  {movie.network.name}
                </p>
              )}

              {movie.runtime && (
                <p>
                  <strong className="text-white">
                    Runtime:
                  </strong>{" "}
                  {movie.runtime} minutes
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="mt-8 rounded-lg bg-violet-600 px-6 py-3 text-sm font-bold transition hover:bg-violet-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;