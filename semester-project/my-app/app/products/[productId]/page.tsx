"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useProductContext } from "@/context/ProductContext";
import { Product } from '../page';
import Link from 'next/link';
import Head from 'next/head';
import { toast } from 'react-hot-toast';


const url = "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


const SingleProductPage = () => {
  const params = useParams();
  const productId = params.productId;
  const productImage = params.images;
  //console.log(productId)
  const { products, addToCart, cart, removeProduct } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [incart, setInCart] = useState(false);

  useEffect(() => {
    const foundProduct = products.find(product => String(product.id) === String(productId));
    setSelectedProduct(foundProduct || null);

    // Check if the selected product is in the cart
    const isInCart = cart.some(product => product.id === foundProduct?.id);
    setInCart(isInCart);

  }, [productId, products, cart]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      setInCart(true);
      toast.success("Product added to Shopping Cart!",{
        duration:4000,
      })
    }
  };

  const handleDelete = () => {
    if (selectedProduct) {
      const isInCart = cart.some(product => product.id === selectedProduct.id);

      if (isInCart) {
        toast.error("Cannot delete a product that is in the Shopping Cart!",{
          duration:4000,
        });
      } else {
        if (confirm("Are you sure you want to delete this product?")) {
          removeProduct(selectedProduct.id);
        }
      }
    }
  };

  return (
    
    <div>
       <Head>
        <title>Single Product page</title>
        <meta name="description" content="Page for displaying a single product page" />
      </Head>
      {selectedProduct ? (
        <>
            <main className='flex flex-col items-center justify-center mt-12'>
              <p className='my-8 text-xl font-bold'>Showing product : {selectedProduct.title}</p>
              <div className="card w-96 bg-base-100 shadow-xl mx-4 xs:w-64 md:w-96">
              <figure><img src={selectedProduct.images.length > 0 ? selectedProduct.images[0] : url} alt="Stock photo" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{selectedProduct.title}</h2>
                    <p className='text-sm rounded-xl bg-stone-200 w-24 p-2'>{selectedProduct.category}</p>
                    <p>{selectedProduct.description}</p>
                    <div className="card-actions justify-end">
                      <p>{selectedProduct.price}&euro;</p>
                    </div>
                  </div>
               </div>
               <div className='flex gap-4 mt-8'>
                <button className={`btn btn-primary  ${incart ? 'disabled' : ''}`} onClick={handleAddToCart} disabled={incart}>
                  {incart ? 'Product added to Shopping Cart' : 'Add to Shopping Cart'}
                </button> 
                <button className="btn btn-outline btn-error" onClick={handleDelete}>Delete product</button>
              </div>
            </main>
        </>
      ) : (
        <>
        <p className='text-red-400 text-xl p-24 text-center'>Product deleted!</p>
        <Link
          href={"/"}
        >
          <p className='text-lg text-center text-green-400 hover:text-green-600'>Back to home page</p>
        </Link>
        </>
      )}
    </div>
  );
};

export default SingleProductPage;
