import Image from "next/image";
import React from "react";

const MoviePage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
        ></Image>
        <div className="">
          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
