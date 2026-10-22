
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaHandsHelping,
  FaHome,
  FaBoxOpen,
  FaInfoCircle,
} from "react-icons/fa";
import { toast, Bounce } from "react-toastify";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const productData = useSelector(
    (state) => state.cart.cartItems
  );

  // Counts quantities if present; otherwise counts each cart entry as 1.
  const cartCount = productData.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const loginToken = localStorage.getItem("loginToken");

  const handleLogout = () => {
    localStorage.removeItem("loginToken");
    setMenuOpen(false);

    toast.success("Logged out successfully", {
      position: "top-center",
      autoClose: 2000,
      transition: Bounce,
    });

    navigate("/login");
  };

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
    }`;

  const links = [
    { to: "/", label: "Home", icon: FaHome, end: true },
    { to: "/products", label: "Products", icon: FaBoxOpen },
    { to: "/about", label: "About", icon: FaInfoCircle },
    { to: "/help", label: "Help", icon: FaHandsHelping },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">
      {/* Main navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg text-white shadow-md">
            <FaShoppingBag />
          </span>

          <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Shop<span className="text-blue-600">Zone</span>
          </span>
        </Link>

        {/* Desktop search */}
        <div className="hidden min-w-0 flex-1 md:block md:max-w-sm lg:max-w-md">
          <Searchbar />
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={navLinkClass}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Cart */}
        <Link
          to="/cart"
          onClick={closeMenu}
          aria-label={`Shopping cart, ${cartCount} items`}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <FaShoppingCart className="text-lg" />

          {cartCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white ring-2 ring-white">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Desktop authentication */}
        <div className="hidden lg:block">
          {loginToken ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 transition hover:bg-red-50"
            >
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              <FaSignInAlt />
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-700 hover:bg-blue-50 lg:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaBars className="text-lg" />
          )}
        </button>
      </nav>

      {/* Mobile search: own row */}
      <div className="px-4 pb-3 md:hidden">
        <Searchbar />
      </div>

      {/* Mobile dropdown */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-1 border-t border-gray-100 bg-white px-4 py-3">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={closeMenu}
                className={navLinkClass}
              >
                <Icon className="text-base" />
                {label}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={navLinkClass}
            >
              <FaShoppingCart />
              Cart
              <span className="ml-auto rounded-full bg-blue-100 px-2.5 py-1 text-xs text-blue-700">
                {cartCount}
              </span>
            </NavLink>

            {loginToken ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
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
