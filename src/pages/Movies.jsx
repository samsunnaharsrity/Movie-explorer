import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);

  // Fetch All Shows
  const fetchAllShows = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.tvmaze.com/shows"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch shows");
      }

      const data = await response.json();

      setShows(data);
    } catch (error) {
      setError(
        "Unable to load shows. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Search Shows
  const searchShows = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      // Search API returns { score, show }
      const searchResults = data.map(
        (item) => item.show
      );

      setShows(searchResults);
    } catch (error) {
      setError(
        "Unable to search shows. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Load All Shows 
  useEffect(() => {
    fetchAllShows();
  }, []);

  // Search Handler
  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) {
      fetchAllShows();
      return;
    }

    searchShows(query);
  };

  // Close Modal

  const closeModal = () => {
    setSelectedShow(null);
  };

  // Close Modal Outside Click
  const handleModalBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-[#080b16] px-5 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* PAGE HEADER */}
        <div className="text-center">

          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Explore Movies & Shows
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            Search and discover your favorite TV shows
            from around the world.
          </p>
        </div>

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search for a movie..."
              className="w-full rounded-lg border border-white/10 bg-[#111727] py-4 pl-12 pr-5 text-white outline-none placeholder:text-gray-500 transition focus:border-violet-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-8 py-4 font-bold transition hover:bg-violet-700"
          >
            Search
          </button>
        </form>

        {/* ERROR */}
        {error && (
          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-red-500/30 bg-red-500/10 p-5 text-center text-red-400">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="py-24 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-violet-500"></div>

            <p className="mt-5 text-gray-400">
              Loading shows...
            </p>
          </div>
        )}

        {/* MOVIE LIST */}
        {!loading && !error && (
          <>
            <div className="mb-7 mt-16 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  {search.trim()
                    ? "Search Results"
                    : "All Shows"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {shows.length} shows available
                </p>
              </div>

              {search.trim() && (
                <button
                  onClick={() => {
                    setSearch("");
                    fetchAllShows();
                  }}
                  className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
                >
                  Show All
                </button>
              )}
            </div>

            {/* No Results */}
            {shows.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-[#111727] p-12 text-center">
                <div className="text-5xl">
                  🎬
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  No Shows Found
                </h3>

                <p className="mt-2 text-gray-400">
                  Try searching with another movie or
                  show title.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {shows.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={setSelectedShow}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* MOVIE DETAILS MODAL */}
      {selectedShow && (
        <div
          onClick={handleModalBackdrop}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111727] shadow-2xl">

            {/* Close X */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-red-600"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Poster */}
            <div className="relative h-[280px] overflow-hidden sm:h-[400px]">
              {selectedShow.image?.original ||
              selectedShow.image?.medium ? (
                <img
                  src={
                    selectedShow.image?.original ||
                    selectedShow.image?.medium
                  }
                  alt={selectedShow.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#080b16] text-gray-500">
                  No Image Available
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#111727] via-transparent to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">

              {/* Title */}
              <h2 className="text-3xl font-black sm:text-4xl">
                {selectedShow.name}
              </h2>

              {/* Rating / Release / Language */}
              <div className="mt-5 flex flex-wrap gap-3 text-sm">

                <span className="rounded-lg bg-yellow-500/10 px-4 py-2 text-yellow-400">
                  ⭐ Rating:{" "}
                  {selectedShow.rating?.average ||
                    "N/A"}
                </span>

                <span className="rounded-lg bg-violet-500/10 px-4 py-2 text-violet-400">
                  📅 Release:{" "}
                  {selectedShow.premiered ||
                    "N/A"}
                </span>

                <span className="rounded-lg bg-white/5 px-4 py-2 text-gray-300">
                  🌐{" "}
                  {selectedShow.language ||
                    "Unknown"}
                </span>

              </div>

              {/* Genres */}
              {selectedShow.genres?.length > 0 && (
                <div className="mt-7">
                  <h3 className="mb-3 text-lg font-bold">
                    Genres
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {selectedShow.genres.map(
                      (genre) => (
                        <span
                          key={genre}
                          className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400"
                        >
                          {genre}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="mt-7">
                <h3 className="mb-3 text-lg font-bold">
                  Overview
                </h3>

                <div
                  className="leading-7 text-gray-400"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedShow.summary ||
                      "No summary available.",
                  }}
                />
              </div>

              {/* Additional Info */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-[#0d1220] p-4">
                  <p className="text-sm text-gray-500">
                    Status
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedShow.status || "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0d1220] p-4">
                  <p className="text-sm text-gray-500">
                    Runtime
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedShow.runtime
                      ? `${selectedShow.runtime} minutes`
                      : "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0d1220] p-4">
                  <p className="text-sm text-gray-500">
                    Network
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedShow.network?.name ||
                      selectedShow.webChannel?.name ||
                      "N/A"}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0d1220] p-4">
                  <p className="text-sm text-gray-500">
                    Official Site
                  </p>

                  {selectedShow.officialSite ? (
                    <a
                      href={selectedShow.officialSite}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block truncate font-semibold text-violet-400 hover:underline"
                    >
                      Visit Website →
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold">
                      N/A
                    </p>
                  )}
                </div>

              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="mt-8 w-full rounded-lg bg-violet-600 px-6 py-3 font-bold transition hover:bg-violet-700"
              >
                ✕ Close
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;

