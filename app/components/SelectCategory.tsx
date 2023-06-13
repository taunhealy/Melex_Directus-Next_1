// https://stackoverflow.com/questions/72973200/how-to-filter-and-display-categories-in-react

import { useEffect, useMemo, useState } from "react";
import allMovies from "./movies.json";
import genreOptions from "./genreOptions.json";

export default function App() {
    const [genre, setGenre] = useState("");
    ...
  }

return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      {genreOptions.map((option, i) => {
        return (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        );
      })}
    </select>
  )

  const movies = useMemo(() => {
    return allMovies.filter((movie) => {
      // return all movies when options All genre selected (genre value is "")
      if (genre === "") {
        return allMovies;
      }
      // if not an empty string, create an array of lowering case genre
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      // return movie if the genre is included in movieGenre
      return movieGenre.includes(genre);
    });
  }, [genre]);
  
  return (
    <select>
      ..
    </select>
    <div>
      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h1>{movie.title}</h1>
            Year:
            <span>{movie.year}</span>
            Runtime:
            <span>{movie.runtime}</span>
            Genre:
            <span>{movie.genre.join(", ")}</span>
            Director:
            <span>{movie.directors}</span>
            Actors:
            <span>{movie.actors.join(", ")}</span>
            <p>{movie.plot}</p>
          </div>
        );
      })}
    </div>
  )
}