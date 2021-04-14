import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(({ name, movies }) => {
        return (
          <div key={name}>
            <h6>{name}</h6>
            <ul>
              {movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
