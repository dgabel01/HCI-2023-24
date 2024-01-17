import { Product } from '@/app/products/page'
import Link from 'next/link';
import React from "react";

interface IProps {
  product: Product;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="card w-96 bg-base-100 shadow-xl mx-4 xs:w-64 md:w-96">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className='text-sm rounded-xl bg-stone-200 w-20 p-2'>{product.category}</p>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <p>{product.price}&euro;</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
