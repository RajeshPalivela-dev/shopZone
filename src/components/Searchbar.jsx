

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { searchItem } from "../features/cart/cartSlice";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // Debounce search by 500 milliseconds
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchItem(search));
    }, 500);

    return () => clearTimeout(timer);
  }, [search, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchItem(search));
  };

  const handleClear = () => {
    setSearch("");
    dispatch(searchItem(""));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 shadow-sm transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:px-5"
      />

      {search && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="shrink-0 p-2 text-gray-500 hover:text-red-500"
        >
          <RiDeleteBack2Line size={18} />
        </button>
      )}

      <button
        type="submit"
        aria-label="Search products"
        className="m-1 flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95 sm:px-5"
      >
        <FaSearch />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
