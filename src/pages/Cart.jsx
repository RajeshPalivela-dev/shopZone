

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {
  removeItem,
  removeAll,
  addItem,
} from "../features/cart/cartSlice.js";

const Cart = () => {
  const { totalAmount, cartQuanty, cartItems } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  // Render each product only once
  const uniqueProducts = cartItems.filter(
    (item, index, arr) =>
      arr.findIndex((product) => product.id === item.id) === index
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Shopping Cart
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Review your items and manage your order.
              </p>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={() => dispatch(removeAll())}
                className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-bold text-red-600 shadow-sm transition hover:border-red-500 hover:bg-red-50 active:scale-95 sm:self-auto"
              >
                <MdDeleteForever className="text-xl" />
                Remove All
              </button>
            )}
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <FaShoppingCart />
            {cartItems.length} total item(s)
          </div>
        </div>

        {uniqueProducts.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50">
              <FaShoppingBag className="text-4xl text-indigo-400" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-800">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              You haven't added any products yet. Explore our products and find
              something you love.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-5 lg:col-span-2">
              {uniqueProducts.map((item) => {
                const quantity = cartQuanty[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                      {/* Product Image */}
                      <div className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-4 sm:h-32 sm:w-36">
                        <img
                          src={item.thumbnail || item.image}
                          alt={item.title || item.name}
                          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Product Information */}
                      <div className="min-w-0 flex-1">
                        <h2 className="line-clamp-2 text-lg font-bold text-slate-800 transition group-hover:text-indigo-700">
                          {item.title || item.name}
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                          Price per item
                        </p>

                        <p className="mt-1 text-xl font-extrabold text-indigo-600">
                          ₹{Number(item.price).toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                          <span className="text-sm font-medium text-slate-500">
                            Quantity:
                          </span>

                          <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                            <button
                              type="button"
                              onClick={() => dispatch(removeItem(item))}
                              disabled={quantity === 0}
                              aria-label={`Remove one ${item.title || item.name}`}
                              className="rounded-lg p-1 text-red-500 transition hover:bg-red-100 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              <IoIosRemoveCircleOutline className="text-2xl" />
                            </button>

                            <span className="min-w-6 text-center text-base font-bold text-slate-800">
                              {quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => dispatch(addItem(item))}
                              aria-label={`Add one ${item.title || item.name}`}
                              className="rounded-lg p-1 text-emerald-600 transition hover:bg-emerald-100 hover:text-emerald-700"
                            >
                              <MdAddCircleOutline className="text-2xl" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price and Remove All of This Product */}
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:justify-center sm:border-t-0 sm:pt-0">
                        <div className="sm:text-right">
                          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                            Item Total
                          </p>

                          <p className="mt-1 text-xl font-extrabold text-slate-900">
                            ₹{(Number(item.price) * quantity).toFixed(2)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            for (let i = 0; i < quantity; i++) {
                              dispatch(removeItem(item));
                            }
                          }}
                          className="mt-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-700 sm:mt-4"
                        >
                          <MdDeleteForever className="text-lg" />
                          Remove product
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Order Summary
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Your order details are shown below.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-4 text-sm text-slate-600">
                  <span>Unique products</span>
                  <span className="font-semibold text-slate-900">
                    {uniqueProducts.length}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm text-slate-600">
                  <span>Total quantity</span>
                  <span className="font-semibold text-slate-900">
                    {cartItems.length}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">
                    ₹{Number(totalAmount).toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between gap-4 text-sm text-slate-600">
                  <span>Delivery</span>
                  <span className="font-bold text-emerald-600">FREE</span>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-bold text-slate-900">
                      Total
                    </span>

                    <span className="text-2xl font-extrabold text-indigo-600">
                      ₹{Number(totalAmount).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={cartItems.length === 0}
                onClick={() => alert("Thank you for shopping with us!")}
                className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                Continue Shopping
              </Link>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                Thank you for shopping with us.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
