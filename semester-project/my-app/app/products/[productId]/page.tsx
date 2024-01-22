"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useProductContext } from "@/context/ProductContext";
import { Product } from '../page';

const SingleProductPage = () => {
  const params = useParams();
  const productId = params.productId;
  //console.log(productId)
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
            <main className='flex flex-col items-center justify-center mt-12'>
              <p className='my-8 text-xl font-bold'>Showing product : {selectedProduct.title}</p>
              <div className="card w-96 bg-base-100 shadow-xl mx-4 xs:w-64 md:w-96">
                  <figure><img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Stock photo" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{selectedProduct.title}</h2>
                    <p className='text-sm rounded-xl bg-stone-200 w-24 p-2'>{selectedProduct.category}</p>
                    <p>{selectedProduct.description}</p>
                    <div className="card-actions justify-end">
                      <p>{selectedProduct.price}&euro;</p>
                    </div>
                  </div>
               </div>
               <button className="btn btn-primary mt-8">Add to Cart</button>
           </main>
        </>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default SingleProductPage;
