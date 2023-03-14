import React from "react";

type Props = {
  currentPage: number;
  totalPokemonCount: number;
  onPageChange: (page: number) => void;
  pokemonsPerPage: number;
};

const Pagination = ({
  currentPage,
  totalPokemonCount,
  onPageChange,
  pokemonsPerPage,
}: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPokemonCount / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-5 flex justify-center items-center">
      <ul className="flex gap-3 mx-auto">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-2 rounded-full ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              onPageChange(page);
            }}
          >
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
