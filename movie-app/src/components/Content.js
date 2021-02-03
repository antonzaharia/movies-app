import React, { Component } from "react";
import "../styles/Content.css";
import MovieCard from "./MovieCard";

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        {this.props.movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}
