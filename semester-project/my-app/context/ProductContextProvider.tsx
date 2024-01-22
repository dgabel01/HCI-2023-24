"use client"
import React, { ReactNode, useState } from 'react'
import { Product } from '@/app/products/page';
import { ProductContext } from './ProductContext';

interface IProps{
        children:ReactNode;
}

const ProductContextProvider = ({ children }: IProps) => {

    const[products, setProducts] = useState<Product[]>([]);
    const [lastGeneratedId, setLastGeneratedId] = useState<number>(0);

    const addProduct =(product:Product)=>{
        /*console.log(product.id)
        console.log("Provider id:")
        console.log(product.id)
        console.log(product)*/
        const generatedId = lastGeneratedId + 1;
        setLastGeneratedId(generatedId);
        setProducts([...products, { ...product, id: generatedId }]);
    }
 

    return (
        <ProductContext.Provider value = {{
                products,addProduct,}
    }>{children}</ProductContext.Provider>
  )
}

export default ProductContextProvider