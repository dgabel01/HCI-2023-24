"use client"
import {Product} from '@/app/products/page';
import { createContext, useContext } from 'react';

interface IProductContext{
    products:Product[];
    addProduct: (product:Product) =>void;
    addToCart: (product: Product) => void;
    cart: Product[]; 
}


export const ProductContext = createContext<IProductContext>({
    products:[],
    addProduct: ()=>{},
    addToCart: () => {},
    cart: [], 

});


export const useProductContext = ()=>useContext(ProductContext);