"use client"
import {Product} from '@/app/products/page';
import { createContext, useContext } from 'react';

export interface IProductContext{
    products:Product[];
    addProduct: (product:Product) =>void;
    addToCart: (product: Product) => void;
    removeProduct :(productId:number)=>void;
    updateProduct: (productId: number, updatedInfo: Partial<Product>) => void;
    cart: Product[]; 
}


export const ProductContext = createContext<IProductContext>({
    products:[],
    addProduct: ()=>{},
    addToCart: () => {},
    removeProduct:()=>{},
    updateProduct:()=>{},
    cart: [], 

});


export const useProductContext = ()=>useContext(ProductContext);