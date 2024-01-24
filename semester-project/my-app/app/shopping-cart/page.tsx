"use client"
import React, {useState} from 'react';
import { useProductContext } from '@/context/ProductContext';
import { Product } from "@/app/products/page";
import Image from 'next/image';
import Head from 'next/head';

interface ProductQuantities {
  [productId: string]: number;
}

export default function ShoppingCart() {
  let { cart } = useProductContext();
  const [productQuantities, setProductQuantities] = useState<ProductQuantities>({});
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const subtotal = cart.reduce((acc, product) => {
    return acc + (product.price * (productQuantities[product.id] || 0));
  }, 0);

  const shipping = 10;

  const updateProductQuantity = (productId:number, quantity:number) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  }
  const allCountsAboveZero = cart.some((product) => productQuantities[product.id] > 0);
  const imageSrc = "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

  const handleOrderClick = () => {
    const anyProductCountAboveZero = cart.some((product) => productQuantities[product.id] > 0);
    if (anyProductCountAboveZero) {
          setProcessing(true);
      
      setTimeout(() => {
        cart.length = 0;
        setOrderStatus('Cart is empty');
      }, 6500);
      setOrderStatus('Thank you for your order!');

    } else {
      setOrderStatus('Product count(s) must be at least 1 (one)');
    }
  };

  return (
    
    <>
     <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Page for purchasing products added to shopping cart" />
      </Head>
      
      <div className="flex items-center justify-center mt-8">
        <p className='text-2xl font-bold '>Shopping cart</p>
      </div>
      {cart.length > 0 ? (
        <div className='flex flex-col mt-8 sm:flex-row sm:justify-evenly'>
          {cart.map((product: Product) => (
            <div className='flex flex-col gap-4 sm:flex-row items-center' key={product.id}>
              <div className='my-4 sm:ml-4'>
                <Image
                  src={imageSrc}
                  width={150}
                  height={100}
                  alt='product-pic'
                />
                <h3 className='mb-2 mt-2 xs:text-center md:text-left'>{product.title}</h3>
                <p className='mb-2 xs:text-center md:text-left'>{product.description}</p>
                <p className='xs:text-center md:text-left'>Price: {product.price}&euro;</p>
              </div>
              <div className='flex flex-col mb-12 ml-4'>
                <p>Count: {productQuantities[product.id] || 0}</p>
                <button
                  onClick={() =>
                    updateProductQuantity(product.id, (productQuantities[product.id] || 0) + 1)
                  }
                  className=' mb-4 p-1 bg-stone-200 '

                >
                  +
                </button>
                <button
                  onClick={() =>
                    updateProductQuantity(product.id, Math.max(0, (productQuantities[product.id] || 0) - 1))
                  }
                  className='p-1 bg-stone-200'
                >
                  -
                </button>
                <div className='mt-4 sm:mt-8'>
                  Total:{product.price * (productQuantities[product.id] || 0)} &euro;
                </div>
              </div>
      

            </div>
          ))}

          <div className='flex flex-col gap-8 mt-8 sm:mt-0 xs:text-center md:text-right'>
            <p className='text-xl font-bold'>Summary:</p>
            <p>Subtotal: {subtotal}&euro;</p>
            {allCountsAboveZero && <p>Shipping: {shipping}&euro;</p>}
            <p>Total price: {subtotal + (allCountsAboveZero ? shipping : 0)}&euro;</p>
            <button className="btn btn-success" onClick={handleOrderClick}>{processing? "Ordering...": "Order"}</button>
            {orderStatus && <p className='text-xl text-green-500 animate-pulse'>{orderStatus}</p>}
          </div>
        </div>
      ) : (
        <p className='text-xl text-center mt-8'>Your cart is empty</p>
      )}
    </>
  );
}
