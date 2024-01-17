"use client"
import React,{useState} from "react";
import Link from "next/link";
import { PureComponent } from "react";
import { IoBuildOutline } from "react-icons/io5";
import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";

//add category tag
export interface Product {
  id: number;
  title: string;
  price:number;
  description:string;
  images:string;
  category:string
}

const Products = ()=> {
  

  const {products} = useProductContext()
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategories;
  });

  const handleCategoryClick = (category: string) => {
    // Check if the category is already selected
    if (selectedCategories.includes(category)) {
      // Remove the category if already selected
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      // Add the category if not selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };


  if(products.length===0){
    return(
      <h1 className="text-center text-red-500 p-5 font-bold text-2xl my-12">No products added yet!</h1>
    );
  }

  return(
  
   <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:justify-center">
     <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Find the best products</h1>
      <p className="mb-6 text-xl">Explore tech, clothing and more</p>

      <div className="flex xs:flex-col md:flex-row items-center justify-center mb-8">
        <div className="flex xs:flex-col md:flex-row justify-start sm:justify-between gap-2 mb-2 sm:mb-4">
        <button
            onClick={() => handleCategoryClick("Electronics")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Electronics") ? "bg-cyan-500" : ""
            }`}
          >
            Electronics
          </button>

           <button
            onClick={() => handleCategoryClick("Clothing")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Clothing") ? "bg-cyan-500" : ""
            }`}
          >
            Clothing
          </button>        

          <button
            onClick={() => handleCategoryClick("Home and Garden")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Home and Garden") ? "bg-cyan-500" : ""
            }`}
          >
            Home and Garden
          </button>
          
          
          <button
            onClick={clearFilters}
            className="rounded-xl border-2 py-2 px-1 bg-red-300 hover:shadow-lg cursor-pointer"
          >
            Clear Filters
        </button>
        </div>
        <div className="ml-0 sm:ml-12 mt-2 sm:mt-0 flex items-row gap-2">
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
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
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