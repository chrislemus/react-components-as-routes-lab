import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({ title, time, genres, metascore }, idx) => {
        return (
          <div key={"movies-" + idx}>
            <h6>{title}</h6>
            <p>{time}</p>
            <ul>
              {genres.map((g, idx) => (
                <li key={title + g}>{g}</li>
              ))}
            </ul>
            {metascore && <p>{metascore}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
