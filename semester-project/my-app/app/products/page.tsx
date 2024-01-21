"use client"
import React,{useState} from "react";
import Link from "next/link";
import { PureComponent } from "react";
import { IoBuildOutline } from "react-icons/io5";
import { useProductContext } from "@/context/ProductContext";
import Head  from "next/head";

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
      <>
        <div className="flex flex-col items-center justify-center mb-24">
          <h1 className="text-center text-red-500 p-5 font-bold text-2xl mt-16">No products added yet!</h1>
          <Link href={`/add-new`}><p className="text-lg hover:text-green-500">Click here to list your products for sale</p></Link>
        </div>
      </>
    );
  }

  return(
  
   <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-4 sm:justify-center">
    <Head>
      <title>Products</title>
      <meta name="description" content="Listed products for sale" />  
    </Head>
     <h1 className="text-2xl sm:text-3xl font-bold p-4 sm:p-10">Find the best products</h1>
      <p className="mb-6 text-xl">Explore tech, clothing and more</p>

      <div className="flex xs:flex-col md:flex-row items-center justify-center mb-12">
        <div className="flex xs:flex-col md:flex-row justify-start sm:justify-between gap-2 mb-2 sm:mb-4">
        <button
            onClick={() => handleCategoryClick("Electronics")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Electronics") ? "bg-cyan-500 dark:bg-stone-200" : ""
            }`}
          >
            Electronics
          </button>

           <button
            onClick={() => handleCategoryClick("Clothing")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Clothing") ? "bg-cyan-500 dark:bg-stone-200" : ""
            }`}
          >
            Clothing
          </button>        

          <button
            onClick={() => handleCategoryClick("Home and Garden")}
            className={`rounded-xl border-2 py-2 px-1 sm:block hover:shadow-lg cursor-pointer ${
              selectedCategories.includes("Home and Garden") ? "bg-cyan-500 dark:bg-stone-200" : ""
            }`}
          >
            Home and Garden
          </button>
          
          
          <button
            onClick={clearFilters}
            className="mr-8 rounded-xl border-2 py-2 px-1 bg-red-300 dark:bg-red-500 text-black hover:shadow-lg cursor-pointer"
          >
            Clear Filters
        </button>
        </div>
        <div className="flex items-row gap-2 xs:m-0 md:mb-4 ">
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
          No products matching inputted title and description
        </p>
      ) : (
        filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
              <div className="card w-96 bg-base-100 shadow-xl mx-4 xs:w-64 md:w-96">
              <figure><img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Stock photo" /></figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className='text-sm rounded-xl bg-stone-200 w-24 p-2'>{product.category}</p>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <p>{product.price}&euro;</p>
                  <button className="btn btn-primary">Buy Now</button>
                  {/*<Link href={`/products/${product.id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                  </Link>*/}
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