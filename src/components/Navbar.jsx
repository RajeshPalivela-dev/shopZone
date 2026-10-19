import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
} from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import { toast, Bounce } from "react-toastify";
import { FaHandsHelping } from "react-icons/fa";

const Navbar = ({ data }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const productData = useSelector((state) => {
    console.log(state.cart.cartItems, "state data in navbar");
    return state.cart.cartItems;
  });
  console.log(productData, "productdata in navbar");

  const loginToken = localStorage.getItem("loginToken");
  const cartCount =
    data?.products?.reduce((total, item) => total + (item.quantity || 1), 0) ||
    0;

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    setMenuOpen(false);
    toast.error(
      "Logout Successfully",

      {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      },
    );
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:text-blue-600 ${
      isActive ? "bg-blue-50 text-blue-600" : "text-gray-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl text-white shadow-lg shadow-blue-200 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            <FaShoppingBag />
          </span>

          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Shop
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Zone
            </span>
          </span>
        </Link>

        <div>
          <Searchbar />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink
            to="/cart"
            className={`${navLinkClass} ${
              productData.length > 0 ? "bg-green-400" : ""
            }`}
          >
            <span className="relative">
              <FaShoppingCart className="text-base" />
              {productData.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
                  {productData.length}
                </span>
              )}
            </span>
            Cart
          </NavLink>



          <NavLink
            to="/help"
            className={`${navLinkClass}`}
          >
            <span className="relative">
              <FaHandsHelping  className="text-base" />
             
            </span>
            Help
          </NavLink>
        </div>

        {/* Login / Logout */}
        <div className="hidden items-center gap-3 md:flex">
          {loginToken ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-100"
            >
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300"
            >
              <FaSignInAlt />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-lg border border-gray-200 p-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 md:hidden"
        >
          <FaBars />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 border-t border-gray-100 bg-white px-5 py-4">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Products
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              <FaShoppingCart />
              Cart ({productData.length})
            </NavLink>

            {loginToken ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 font-semibold text-red-600 transition hover:bg-red-50"
              >
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                <FaSignInAlt />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
