"use client"
import {Product} from '@/app/products/page';
import { createContext, useContext } from 'react';

interface IProductContext{
    products:Product[];
    addProduct: (product:Product) =>void;
}


export const ProductContext = createContext<IProductContext>({
    products:[],
    addProduct(product){},
});


export const useProductContext = ()=>useContext(ProductContext);