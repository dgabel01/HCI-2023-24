"use client"
import Link from "next/link";
import { PureComponent } from "react";
import { IoBuildOutline } from "react-icons/io5";
import Pagination from '@etchteam/next-pagination'
import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";


export interface Product {
  id: number;
  title: string;
  price:number;
  description:string;
  images:string;
}

const Products = ()=> {

  const {products} = useProductContext()

  if(products.length===0){
    return(
      <h1 className="text-center text-red-500 p-5 font-bold text-xl">No products added yet!</h1>
    );
  }

  return(

   <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:justify-center">
     <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Find the best products</h1>
      <p className="mb-6 text-xl">Explore tech, clothing and more</p>

      <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
        <div className="flex flex-wrap items-row justify-start sm:justify-between gap-2 mb-2 sm:mb-0">
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block hover:shadow-lg cursor-pointer"><p>Category 1</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block hover:shadow-lg cursor-pointer"><p>Category 2</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block hover:shadow-lg cursor-pointer"><p>Category 3</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block hover:shadow-lg cursor-pointer"><p>Category 4</p></div>
          <div className="rounded-xl border-2 py-2 px-1 bg-cyan-500 hover:shadow-lg cursor-pointer"><p>More filters</p></div>
        </div>
        <div className="ml-0 sm:ml-12 mt-2 sm:mt-0 flex items-row gap-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products..."
            className="w-full sm:w-64 p-2 outline-none rounded-2xl border-2 focus:shadow-lg"
          />
       </div>
      </div>



      <div className="flex flex-wrap gap-4 items-center justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>



    <div className="flex flex-row mt-4">
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