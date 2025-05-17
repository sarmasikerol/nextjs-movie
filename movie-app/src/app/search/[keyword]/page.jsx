import Movie from "@/components/Movie";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=07f737e9bca34a405ca1ff83b3a56544&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div>Aranılan şey bulunamadı!!!</div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movie key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
