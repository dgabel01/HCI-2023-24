// product-context-provider.tsx
"use client"
import React, { ReactNode, useState } from 'react'
import { Product } from '@/app/products/page';
import { ProductContext } from './ProductContext';

interface IProps {
  children: ReactNode;
}

const ProductContextProvider = ({ children }: IProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [lastGeneratedId, setLastGeneratedId] = useState<number>(0);
  const [cart, setCart] = useState<Product[]>([]);
  const [incart, setInCart] = useState(true);

  const addProduct = (product: Product) => {
    const generatedId = lastGeneratedId + 1;
    setLastGeneratedId(generatedId);
    setProducts([...products, { ...product, id: generatedId, images:product.images}]);
  }

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setInCart(true);
  }

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };


  const removeProduct = (productId:number)=>{
      const updatedProducts = products.filter(product=>product.id!=productId);
      setProducts(updatedProducts);
  }

  const updateProduct = (productId: number, updatedInfo: Partial<Product>) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, ...updatedInfo };
      }
      return product;
    });

    setProducts(updatedProducts);
  }
  

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      addToCart,
      removeFromCart,
      removeProduct,
      updateProduct,
      cart
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
