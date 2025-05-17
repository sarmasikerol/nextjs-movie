import Movie from "@/components/Movie";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=07f737e9bca34a405ca1ff83b3a56544&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movie key={i} dt={dt} />
      ))}
    </div>
  );
};

export default Page;
