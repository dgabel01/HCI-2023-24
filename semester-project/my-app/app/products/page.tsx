"use client"
import React, { useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import Head from "next/head";
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa'; 

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: string | "";
  customCategory?: string; 
}

const url = "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Products = () => {
  const { products } = useProductContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) =>
        category.toLowerCase() === "other"
          ? product.customCategory?.toLowerCase().includes("other")
          : product.category.toLowerCase().includes(category.toLowerCase())
      );

    return matchesSearch && matchesCategories;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };
  
  const getUniqueCategories = () => {
    const customCategories = products
      .filter((product) => product.customCategory && !["Electronics", "Clothing", "Home and Garden"].includes(product.category))
      .map((product) => product.customCategory);

    const uniqueCustomCategories = Array.from(new Set(customCategories));
    return uniqueCustomCategories;
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  if (products.length === 0) {
    return (
      <>
      <div className="flex flex-col items-center justify-center mb-48">
        <h1 className="text-center text-red-500 p-5 font-bold text-3xl mt-16">
          Oops! No products added yet <FaShoppingCart className="inline-block ml-2" />
        </h1>
        <p className="text-gray-600 text-lg mb-8 text-center sm:text-left mx-4">
          It looks like you haven&apos;t added any products for sale. Let&apos;s fix that!
        </p>
        <Link href={`/add-new`}>
          <p className="bg-green-500 text-white py-2 px-4 rounded-full text-lg hover:bg-green-600 xs:text-center">
            List your products for sale now
          </p>
        </Link>
      </div>
    </>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:justify-center">
      <Head>
        <title>Products</title>
        <meta name="description" content="Listed products for sale" />
      </Head>
      <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Find the best products for sale</h1>
      <p className="mb-6 text-xl">Explore tech, clothing, and more</p>

      <div className="flex xs:flex-col md:flex-row items-center justify-center mb-12 bg-red">
        <div className="flex xs:flex-col md:flex-row justify-start sm:justify-between gap-2 mb-2 sm:mb-4">
        {["Electronics", "Clothing", "Home and Garden"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category || "")}
            className={`rounded-xl border-2 p-3 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes(category)
                ? "bg-cyan-500 dark:bg-stone-200"
                : ""
            }`}
          >
            {category}
          </button>
        ))}

        {getUniqueCategories().map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category || "")}
            className={`rounded-xl border-2 p-3 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes(category?? "")
                ? "bg-cyan-500 dark:bg-stone-200"
                : ""
            }`}
          >
            {category}
          </button>
        ))}


          <button
            onClick={clearFilters}
            className="mr-8 font-bold rounded-xl border-2 p-3 bg-red-300 dark:bg-red-500 text-black hover:shadow-lg cursor-pointer xs:m-auto"
          >
            Clear Filters
          </button>
        </div>
        <div className="flex items-row gap-2 xs:ml-2 md:mb-4 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 p-2 outline-none rounded-2xl border-2 focus:shadow-lg"
          />
          
        </div>
      </div>

      <div className="flex flex-wrap gap-12 items-center justify-center">
        {filteredProducts.length === 0 ? (
          <p className="text-red-500 text-lg font-bold">
            No products matching your search query or filters!
          </p>
        ) : (
          filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="card w-96 bg-base-100 shadow-xl mx-4 xs:w-64 md:w-96">
                {product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <figure key={index}>
                      <img src={image} alt={`Product ${index + 1}`} />
                    </figure>
                  ))
                ) : (
                  // If no images, use default URL
                  <figure>
                    <img src={url} alt="Default Stock photo" />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="text-sm rounded-xl bg-stone-200 w-24 p-2">
                    {product.customCategory ? product.customCategory : product.category}
                  </p>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <p>{product.price}&euro;</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="flex flex-row mt-8">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </main>
  );
};

export default Products;
