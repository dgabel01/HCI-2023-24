// pages/products/[id].tsx
/*import { useProductContext } from '@/context/ProductContext';
import { Product } from '@/app/products/page';
import  P  from 'next/dist/server/next';

interface ProductDetailProps {
  product: Product;
}

export async function load({ params }: { params: typeof P }) {
  const productId = params.id as string;
  const { products } = useProductContext();
  console.log('Fetched products:', products);
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    console.error('Product not found. Product ID:', productId);
    throw new Error('Product not found');
  }

  return {
    props: {
      product,
    },
  };
}

const ProductDetailPage = ({ product }: ProductDetailProps) => {
  if (!product) {
    console.error('Product not found. Product:', product);
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price} &euro;</p>
    </div>
  );
};

export default ProductDetailPage;*/

import React from 'react'

const page = () => {
  return (
    <div>removed for vercel</div>
  )
}

export default page