import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { removeItem,removeAll } from '../features/cart/cartSlice.js';
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {

    const products=useSelector((state)=>{
          console.log(state.cart.cartItems,"state in cartData")
          return state.cart

    })
    console.log(products,"cartData")
    console.log(products.totalAmount,"totalamount")
     console.log(typeof products.totalAmount,"totalamount")



     const dispatch=useDispatch()
  return (
      <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            to="/products"
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>

          
<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Shopping Cart
  </h1>

  <button
     onClick={()=>dispatch(removeAll())}
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-600 shadow-sm transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-md active:scale-95"
  >
    <MdDeleteForever className="text-xl" />
    <span>Remove All</span>
  </button>
</div>

          <p className="mt-2 text-gray-500">
            You have {products.cartItems.length} item(s) in your cart.
          </p>
        </div>

        {products.cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center shadow-sm">
            <FaShoppingBag className="mx-auto mb-5 text-5xl text-gray-300" />

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty!
            </h2>

            <p className="mt-3 text-gray-500">
              Looks like you haven't added any products yet.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {products.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <img
                    src={item.thumbnail || item.image}
                    alt={item.title || item.name}
                    className="h-28 w-full rounded-xl bg-gray-100 object-contain p-2 sm:w-32"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.title || item.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      Price per item
                    </p>

                    <p className="mt-1 text-xl font-bold text-blue-600">
                      ₹{item.price}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      Quantity: {item.quantity || 1}
                    </p>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="text-lg font-extrabold text-gray-900">
                      ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>

                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      <FaTrashAlt />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{products.totalAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="font-semibold text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between gap-3 text-lg font-extrabold text-gray-900">
                    <span>Total</span>
                    <span>₹{products.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert("Thank you for Booking!")}
                className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                Your order summary is ready.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart