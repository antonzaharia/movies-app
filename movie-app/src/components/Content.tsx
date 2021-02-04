import React from "react";
import "../styles/Content.css";
import MovieCard from "./MovieCard"

interface Props {
  movies: string[]
}

const Content: React.FunctionComponent<Props> = (props) => {
      return (
      <div className="content">
        {props.movies.map((movie) => (
          <MovieCard movie={movie} key={movie['id']} />
        ))}
      </div>
      )
};
export default Content