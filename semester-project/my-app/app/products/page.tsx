import Link from "next/link";
import { PureComponent } from "react";

export interface Product {
  id: number;
  title: string;
  price:number;
  description:string;
  images:string;
}

const BASE_API_URL = "https://api.escuelajs.co/api/v1/products";

const getProducts = async (): Promise<Product[]> => {
  const limit = 10;
  const data = await fetch(`${BASE_API_URL}?limit=${limit}`);
  return data.json();
};

export default async function Products() {
  const products = await getProducts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Products grid:</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
        {products.map((product) => (
          <li key={product.id} className="border border-solid border-stone-900 rounded-xl p-4">
            <Link href={`/products/${product.id}`}>
              <span className="text-lg sm:text-xl text-purple-600">
                {product.description}
              </span>
              <img src={product.images} alt="product-picture" className="mt-2" />
              <span className="text-center">
                <p>{product.price}&euro;</p>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
