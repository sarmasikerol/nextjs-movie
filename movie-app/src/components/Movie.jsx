"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movie = ({ dt }) => {
  const router = useRouter();

  console.log(dt);
  return (
    <div
      onClick={() => router.push(`/movie/${dt?.id}`)}
      className="min-w-[470px] relative imgContainer cursor-pointer hover:opacity-75"
    >
      <Image
      alt="resim"
        width={450}
        height={300}
        className="min-w-[450px] h-[300px] imgContainer"
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path 
        }`}
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100">
        <div>{dt?.title}</div>
        <div>
          {dt?.release_date} - {dt?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movie;
