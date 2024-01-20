import React from 'react'

const page = () => {
  return (
    <div>single product page</div>
  )
}

export default page;

/*"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useProductContext } from "@/context/ProductContext";
import { Product } from '../page';

const SingleProductPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  console.log(productId)
  const { products } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find(product => String(product.id) === String(productId));

    setSelectedProduct(foundProduct || null);
    //console.log(foundProduct);

  }, [productId, products]);


  return (
    <div>
      {selectedProduct ? (
        <>
          <h1>Product Details for ID: {productId}</h1>
          <p>Title: {selectedProduct.title}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Description: {selectedProduct.description}</p>
          <p>Price: {selectedProduct.price}&euro;</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProductPage;*/
