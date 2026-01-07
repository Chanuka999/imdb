const API_KEY = process.env.API_KEY;
import Resuts from "@/components/Resuts";
import React from "react";
import { resolve } from "styled-jsx/css";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const genre = params.genre || "fetchTrending";
  const res = await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch(
        `http://api.themoviedb.org/3${
          genre === "fetchTrending" ? `/movie/top_rated` : `/trending/all/week`
        }?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
      resolve(response);
    }, 2000);
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results.title);

  return (
    <div>
      <h1>
        <Resuts results={results} />
      </h1>
    </div>
  );
};

export default page;
