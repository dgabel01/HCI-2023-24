// ./app/products/[productId]/page.tsx
/*"use client"
import React from "react";
import { useRouter } from "next/router";
import { useProductContext } from "@/context/ProductContext";

const ProductPage = () => {
  const router = useRouter();
  const { products } = useProductContext();
  const productId = parseInt(router.query.productId as string, 10);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // Product not found
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-lg mb-4">Price: ${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
      <img src={product.images} alt={product.title} className="mt-4 max-w-md" />
      <p className="mt-4">Category: {product.category}</p>
    </div>
  );
};

export default ProductPage;*/

import React from 'react'

const page = () => {
  return (
    <div>single product page</div>
  )
}

export default page