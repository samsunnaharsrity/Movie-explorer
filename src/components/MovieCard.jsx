function MovieCard({ movie, onDetails }) {
  const poster =
    movie.image?.medium ||
    "https://placehold.co/300x450/151b2d/ffffff?text=No+Image";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111727] transition duration-300 hover:-translate-y-2 hover:border-violet-500/50">
      
      {/* Poster */}
      <div className="relative h-[360px] overflow-hidden bg-[#181f32]">
        <img
          src={poster}
          alt={movie.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 rounded-lg bg-black/80 px-3 py-1.5 text-sm font-bold backdrop-blur">
          ⭐ {rating}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="truncate text-lg font-bold">
          {movie.name}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
          <span className="text-yellow-400">
            ⭐ {rating}
          </span>

          <span>•</span>

          <span>📅 {year}</span>
        </div>

        <button
          onClick={() => onDetails(movie)}
          className="mt-5 w-full rounded-lg bg-violet-600 px-4 py-3 text-sm font-bold transition hover:bg-violet-700"
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;