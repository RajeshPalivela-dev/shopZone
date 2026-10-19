import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { searchItem } from "../features/cart/cartSlice";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
    dispatch(searchItem(search));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-xl items-center overflow-hidden rounded-full border border-gray-200 bg-gray-50 shadow-sm transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100"
    >
      <div className="flex">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />
        <button onClick={() => setSearch("")}>
          <RiDeleteBack2Line />
        </button>
      </div>

      <button
        type="submit"
        aria-label="Search products"
        className="m-1 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95"
      >
        <FaSearch />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
};

export default Searchbar;
