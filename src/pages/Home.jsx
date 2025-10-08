import MovieCard from "../component/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
// eslint-disable-next-line no-unused-vars
import { renderpopular, rendersearch } from "../services/api";

function Home() {
  const [search, setsearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    async function renpopular() {
      try {
        const result = await rendersearch("popular");
        setsearch(result || []);
      } catch (error) {
        console.log(error);
      }
    }
    renpopular();
  }, []);
  async function handleSearch(e) {
    e.preventDefault();
    const result = await rendersearch(searchQuery);
    setsearch(result || []);
    searchQuery("");
  }
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search Movies...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {search.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
