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
        <div className="ml-0 sm:ml-12 mt-2 sm:mt-0">
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
          <div key={product.id} className="w-64">
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
    </main>
  );
}

/*
"use client"
import Link from "next/link";
import { PureComponent } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
}

const BASE_API_URL = "https://api.escuelajs.co/api/v1/products";

const getProducts = async (page: number = 1): Promise<{ data: Product[]; total: number }> => {
  //const limit = 10;
  //const offset = (page - 1) * limit;
  try {
    const response = await fetch(`${BASE_API_URL}`);
    if (!response.ok) {
      console.error("Failed to fetch products. Status:", response.status);
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const result = await response.json();
    return { data: result.data, total: result.total };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

export default class Products extends PureComponent {
  state = {
    products: [] as Product[],
    total: 0,
    currentPage: 1,
  };

  async componentDidMount() {
    await this.fetchProducts();
  }

  fetchProducts = async (page: number = 1) => {
    try {
      console.log("Fetching products...");
      const { data, total } = await getProducts(page);
      console.log("Products data:", data);
      this.setState({ products: data || [], total, currentPage: page });
      console.log("Products state:", this.state.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle the error as needed
    }
  };

  handlePageChange = async (page: number) => {
    await this.fetchProducts(page);
  };

  render() {
    const { products, total, currentPage } = this.state;

    return (
      <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:p-10">
       
        <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Find the best products</h1>
      <p className="mb-6 text-xl">Explore tech, clothing and everyday items</p>

      <div className="flex flex-col sm:flex-row items-stretch justify-center mb-8">
        <div className="flex flex-wrap items-row justify-start sm:justify-between gap-2 mb-2 sm:mb-0">
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block"><p>Category 1</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block"><p>Category 2</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block"><p>Category 3</p></div>
          <div className="rounded-xl border-2 py-2 px-1 hidden sm:block"><p>Category 4</p></div>
          <div className="rounded-xl border-2 py-2 px-1 bg-cyan-500 hover:shadow-lg"><p>More filters</p></div>
        </div>
        <div className="ml-0 sm:ml-12 mt-2 sm:mt-0">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search products..."
            className="w-full sm:w-64 p-2 outline-none rounded-2xl border-2 focus:shadow-lg"
          />
       </div>
      </div>

        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <li key={product.id} className="border-stone-900 rounded-xl p-4 overflow-hidden shadow-lg outline-1">
                <Link href={`/products/${product.id}`}>
                  <span className="text-lg sm:text-xl text-purple-600">
                    {product.description}
                  </span>
                  <img src={product.images} alt="product-picture" className="mt-2" />
                  <span className="text-center">
                    <p className="mt-4">{product.price}&euro;</p>
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ul>
    </main>
       
        <div className="flex items-center justify-center mt-8">
          {Array.from({ length: Math.ceil(total / 10) }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => this.handlePageChange(page)}
              className={`mx-2 px-4 py-2 rounded ${currentPage === page ? 'bg-gray-700 text-white' : 'bg-gray-300'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>
    );
  }
}*/

