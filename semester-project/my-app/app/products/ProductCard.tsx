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
      <figure><img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Stock photo" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className='text-sm rounded-xl bg-stone-200 w-24 p-2'>{product.category}</p>
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
