import Link from "next/link";
import { PureComponent } from "react";
import { IoBuildOutline } from "react-icons/io5";
import Pagination from '@etchteam/next-pagination'

export interface Product {
  id: number;
  title: string;
  price:number;
  description:string;
  images:string;
}

const BASE_API_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=24";

const getProducts = async (): Promise<Product[]> => {
  const limit = 5;
  const data = await fetch(`${BASE_API_URL}`);
  return data.json();
};

export default async function Products() {
  const products = await getProducts();
  return (
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

      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 sm:gap-8">
        {products.map((product) => (
          <div key={product.id} className="w-64 ">
          <li className="border-stone-900 rounded-xl p-4 overflow-hidden shadow-lg outline-1">
            <Link href={`/products/${product.id}`}>
              <img src={product.images} alt="product-picture" className="mt-2" />
              <span className="text-lg sm:text-xl text-purple-600">
                {product.description}
              </span>
              <span className="text-center">
                <p className="mt-4">{product.price}&euro;</p>
              </span>
            </Link>
          </li>
          </div>
        ))}
      </ul>
      <div className="flex flex-row">
        <p className="mt-8">Pagination...</p>
        <span className="mt-9 ml-4"><IoBuildOutline /></span>
      </div>
    </main>
  );
}




