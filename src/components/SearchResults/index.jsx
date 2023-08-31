import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import BackButton from "@/components/BackButton";

const SearchResults = () => {
  const router = useRouter();

  const results = useSelector((state) => state.search.results);
  const error = useSelector((state) => state.search.error);

  return (
    <div>
      {error.error ? (
        <div className="text-center">
          <h3 className="font-bold text-2xl pb-10">
            No se encontraron resultados para la búsqueda
          </h3>
        </div>
      ) : (
        <>
          {results.length === 0 ? (
            <Spinner />
          ) : (
            <div>
              <h3 className="font-bold text-2xl pb-10 text-center">
                Resultados:
              </h3>
              <div className="flex flex-col gap-4">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    className="underline hover:text-blue-700"
                    href={`/items/${result.id}`}
                  >
                    {result.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      <BackButton />
    </div>
  );
};

export default SearchResults;
