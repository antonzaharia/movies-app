import React from "react";
import gsap from "gsap";


export default function MovieCard({ movie }) {
  let classValue = `${movie.id}`;
  let classTitle = `title title${classValue}`;
  let classOverview = `overview overview${classValue}`;

  let overview =
    movie.overview.length >= 250
      ? `${movie.overview.slice(0, 250)}...`
      : movie.overview;

  const handleMouseEnter = () => {
    gsap.to(`.${classTitle.split(" ")[1]}`, {
      top: 0,
      duration: 0.3,
    });
    gsap.to(`.${classOverview.split(" ")[1]}`, {
      opacity: 1,
      top: "40%",
      duration: 0.3,
    });
  };
  const handleMouseLeave = () => {
    gsap.to(`.${classTitle.split(" ")[1]}`, {
      bottom: 0,
      top: "auto",
      duration: 0.3,
    });
    gsap.to(`.${classOverview.split(" ")[1]}`, {
      opacity: 0,
      duration: 0.3,
    });
  };
  return (
    <div
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className={classTitle}>{movie.title}</h1>
      <p className={classOverview}>
        {overview}
        <p>Rating: {movie.vote_average}</p>
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="poster"
      />
    </div>
  );
}
