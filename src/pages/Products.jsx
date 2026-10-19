import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice.js";
import { toast,Bounce } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


  const searchData = useSelector((state) => {
    console.log(
      state.cart.searchInput,
      "state in products and selector and search",
    );
    return state.cart.searchInput;
  });
  console.log(searchData, "searchData");
  console.log(searchData.length,"length of string")
  // let strlength=searchData.length;
   
  //  console.log(strlength,"strlength")
  

  const dispatch = useDispatch();

  async function getData() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=200",
      );

      setProducts(response.data.products);

      console.log("Products:", response.data.products);
      console.log("Total products:", response.data.products.length);
    } catch (err) {
      console.log(err, "Error fetching products");
    }
  }


  //pagenation
  //total products
  console.log(products.length, "total products");
  const totalPages = Math.ceil(products.length / 12);
  console.log(totalPages);

  //itemsperpage
  const itemsPerPage = 12;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  //get products
  const currentProducts = products.slice(firstIndex, lastIndex);
  console.log(currentProducts, "current products");

  //

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }
  function handlePrev() {
    setCurrentPage(currentPage - 1);
  }

  //search

  const filteredData = products.filter((item) => {
    return item.title.toLowerCase().includes(searchData.trim().toLowerCase());
  });
  console.log(filteredData, "filter");

  useEffect(()=>{
      getData()
  },[])

  useEffect(() => {
  if (searchData.trim().length > 0 && filteredData.length === 0) {
     toast.error(
        "Your Entered Products not availble",
         
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
     
  }
}, [searchData, filteredData]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-8">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
          Our Products
        </h1>

        <p className="mt-3 text-gray-500">
          Discover the best products at amazing prices.
        </p>
      </div>

      {/* searched items*/}

      <div>
        {searchData ? (
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredData.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Product Image */}
                <div className="flex h-52 items-center justify-center overflow-hidden bg-white p-5">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                    {product.category}
                  </p>

                  <h2 className="line-clamp-2 min-h-12 text-base font-bold text-gray-800">
                    {product.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
                    {product.description}
                  </p>

                  {/* Rating and Stock */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-md bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-700">
                      ★ {product.rating}
                    </span>

                    <span className="text-xs font-medium text-green-600">
                      {product.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-gray-900">
                      ${product.price}
                    </span>

                    <span className="text-xs text-gray-400">
                      {product.discountPercentage.toFixed(0)}% off
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => dispatch(addItem(product))}
                    disabled={product.stock <= 0}
                    className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Product Image */}
                  <div className="flex h-52 items-center justify-center overflow-hidden bg-white p-5">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                      {product.category}
                    </p>

                    <h2 className="line-clamp-2 min-h-12 text-base font-bold text-gray-800">
                      {product.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
                      {product.description}
                    </p>

                    {/* Rating and Stock */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-md bg-yellow-50 px-2 py-1 text-sm font-semibold text-yellow-700">
                        ★ {product.rating}
                      </span>

                      <span className="text-xs font-medium text-green-600">
                        {product.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-extrabold text-gray-900">
                        ${product.price}
                      </span>

                      <span className="text-xs text-gray-400">
                        {product.discountPercentage.toFixed(0)}% off
                      </span>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => dispatch(addItem(product))}
                      disabled={product.stock <= 0}
                      className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition duration-200 hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}

              {/* //paginatin div */}

              {/* Pagination div */}
              <div className="col-span-full flex w-full justify-center mt-8">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-300"
                  >
                    ← Prev
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`rounded-lg border px-4 py-2 ${
                        currentPage === index + 1
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-700 hover:bg-blue-100"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-300"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>


    </div>
  );
};

export default Products;
