import Link from "next/link";
import { PureComponent } from "react";

export interface Product {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getProducts = async (): Promise<Product[]> => {
  const data = await fetch(`${BASE_API_URL}/photos?_limit=100`); // Add the query parameter to limit to 100 products
  return data.json();
};

export default async function Products() {
  const products = await getProducts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Products "grid":</h1>
      <ul className="flex flex-col gap-8 justify-center">
        {products.map((product) => (
          <li key={product.id} >
            <Link href={`/products/${product.id}`}>
              <span className="text-2xl text-purple-500">
                Product: {product.title}
              </span>
              <img src={product.url} alt="product-picture" />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
