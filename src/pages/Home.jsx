import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=8",
        );
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const categories = [
    { name: "Beauty", icon: "✨", color: "bg-pink-100" },
    { name: "Fragrances", icon: "🌸", color: "bg-purple-100" },
    { name: "Furniture", icon: "🛋️", color: "bg-amber-100" },
    { name: "Groceries", icon: "🛒", color: "bg-green-100" },
    { name: "Laptops", icon: "💻", color: "bg-blue-100" },
    { name: "Smartphones", icon: "📱", color: "bg-indigo-100" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Announcement */}
      <div className="bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white">
        <marquee scrollAmount="20">
          {" "}
          🎉 Special Deals Are Here! Discover amazing products at great prices.
        </marquee>
      </div>

      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-100">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
              YOUR EVERYDAY SHOPPING DESTINATION
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shop Smarter.
              <span className="mt-2 block text-indigo-600">Live Better.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
              Discover amazing products, explore trending collections, and find
              everything you need in one place. Your next favorite product is
              waiting for you!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#featured"
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-1 hover:bg-indigo-700"
              >
                Shop Collection →
              </a>

              <a
                href="#categories"
                className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-bold text-gray-800 transition hover:border-indigo-500 hover:text-indigo-600"
              >
                Explore Categories
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-black">Quality</h3>
                <p className="mt-1 text-sm text-gray-500">Products you love</p>
              </div>

              <div>
                <h3 className="text-2xl font-black">Value</h3>
                <p className="mt-1 text-sm text-gray-500">Prices you'll love</p>
              </div>

              <div>
                <h3 className="text-2xl font-black">Easy</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Shopping experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-purple-300/50 blur-3xl" />
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-indigo-300/50 blur-3xl" />

            <div className="relative rounded-3xl border border-white bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=85"
                alt="Shopping bags and online shopping"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                <p className="text-sm font-semibold text-indigo-600">
                  DISCOVER SOMETHING NEW
                </p>
                <h2 className="mt-1 text-xl font-extrabold">
                  Your favorites, all in one place.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-gray-100">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            ["🚚", "Easy Shopping", "Shop from anywhere"],
            ["💳", "Convenient", "Browse products easily"],
            ["⭐", "Top Picks", "Discover popular items"],
            ["💬", "Customer Care", "We're here to help"],
          ].map(([icon, title, subtitle]) => (
            <div key={title} className="flex items-center gap-3">
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
            Browse by interest
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 text-gray-500">
            Find the products that match your lifestyle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                window.location.href =
                  "/products?category=" +
                  encodeURIComponent(category.name.toLowerCase());
              }}
              className={`${category.color} rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-4 text-sm font-bold">{category.name}</h3>
              <p className="mt-2 text-xs text-gray-500">Explore →</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
                Handpicked for you
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-3 text-gray-500">
                Explore some of our latest products.
              </p>
            </div>

            <Link
              to="/products"
              className="font-bold text-indigo-600 hover:text-indigo-800"
            >
              View All Products →
            </Link>
          </div>

          {loading ? (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-gray-500">
                Loading products...
              </p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              Unable to load products. Please try again later.
            </div>
          ) : (
            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white p-5">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                      FEATURED
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                      {product.category}
                    </p>

                    <h3 className="mt-2 min-h-12 line-clamp-2 font-bold text-gray-800">
                      {product.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xl font-black">
                        ${product.price}
                      </span>

                      <span className="rounded-lg bg-yellow-50 px-2 py-1 text-sm font-bold text-yellow-700">
                        ★ {product.rating}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {product.stock > 0 ? "✓ In Stock" : "Out of Stock"}
                    </p>

                    <button
                      disabled={product.stock <= 0}
                      onClick={() => dispatch(addItem(product))}
                      className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-3 font-bold text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      {product.stock > 0 ? "🛒 Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-indigo-600 px-7 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-purple-400/40 blur-3xl" />

          <div className="relative max-w-2xl">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              YOUR NEXT GREAT FIND
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              Great products.
              <span className="block text-indigo-200">
                Better everyday shopping.
              </span>
            </h2>

            <p className="mt-4 leading-7 text-indigo-100">
              Explore our collection and discover something special for yourself
              or someone you love.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-50"
            >
              Explore Products →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
              About Our Store
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Everything you need, all in one place.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-600">
              Welcome to Shopora, your online shopping destination. We make it
              easy to discover products across categories, compare options, and
              add your favorites to your cart.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Explore our product collection and enjoy a clean, convenient
              shopping experience designed around you.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block font-bold text-indigo-600 hover:text-indigo-800"
            >
              Start Exploring →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <Link to="/" className="text-2xl font-black text-white">
              shop<span className="text-indigo-400">ora.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Discover products, explore categories, and make shopping simple
              with Shopora.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Quick Links</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <Link to="/products" className="hover:text-white">
                Products
              </Link>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Why Shop With Us?</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              Discover new products, browse convenient categories, and manage
              your shopping cart in one place.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Shopora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
