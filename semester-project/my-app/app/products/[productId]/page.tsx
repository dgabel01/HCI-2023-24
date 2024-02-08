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
  const { products, addToCart, cart, removeProduct, updateProduct } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [incart, setInCart] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProductInfo, setEditedProductInfo] = useState({
    title: selectedProduct?.title || '',
    category:selectedProduct?.category||'',
    customCategory: selectedProduct?.customCategory || '',
    description: selectedProduct?.description || '',
    price: selectedProduct?.price || 0,
  });


  const handleEdit = () => {
    if(incart){
      toast.error("Can't edit a product that's in Cart!",{
        duration:4000,
      })
      return;
    }
    setIsEditing(true);
  };

  const handleSave = () => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, editedProductInfo);
  
      const updatedProduct = {
        ...selectedProduct,
        customCategory: editedProductInfo.customCategory,
      };
  
      setSelectedProduct(updatedProduct);
    }
  
    setIsEditing(false);
    toast.success("Product information updated!", {
      duration: 4000,
    });
  };
  

  const handleCancelEdit = () => {
    setIsEditing(false);
  };



  useEffect(() => {
    const foundProduct = products.find(product => String(product.id) === String(productId));
    setSelectedProduct(foundProduct || null);

    
    setEditedProductInfo({
      title: foundProduct?.title || '',
      category: foundProduct?.category || '',
      customCategory: foundProduct?.customCategory || '',
      description: foundProduct?.description || '',
      price: foundProduct?.price || 0,
    });

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




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProductInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


  const handleCategoryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setEditedProductInfo((prevInfo) => ({
      ...prevInfo,
      category: value,
      customCategory: value,
    }));
  };
  


  return (  
    <div>
       <Head>
        <title>Single Product page</title>
        <meta name="description" content="Page for displaying a single product page" />
      </Head>
      {selectedProduct ? (
  <>
    <div className="flex flex-row justify-start mt-1 ml-1">
        <Link href={"/"}>
          <p className="hover:text-green-500">Back to Home</p>
        </Link>
    </div>
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

      <div className=' xs:flex flex-col gap-4 lg:flex gap-4 mt-8 '>
        {isEditing ? (
          <>
            <input
              type='text'
              name='title'
              value={editedProductInfo.title}
              onChange={handleInputChange}
              placeholder='New Title...'
              className='rounded-xl p-2 border-2'
            />
            <input
              type='text'
              name='category'
              onChange={handleCategoryInputChange}
              placeholder='New Category...'
              className='rounded-xl p-2 border-2'
            />
            <textarea
              name='description'
              value={editedProductInfo.description}
              onChange={handleInputChange}
              placeholder='New Description...'
              className='rounded-xl p-2 border-2'
            />
            <input
              type='number'
              name='price'
              value={editedProductInfo.price}
              onChange={handleInputChange}
              placeholder='New Price...'
              className='rounded-xl p-2 border-2'
            />
          </>
        ) : null}

        <button
          className={`btn btn-primary ${incart ? 'disabled' : ''}`}
          onClick={handleAddToCart}
          disabled={incart || isEditing}
        >
          {incart ? 'Product added to Shopping Cart' : 'Add to Shopping Cart'}
        </button>

        {isEditing ? (
          <>
            {/* Save and Cancel buttons during editing */}
            <button className="btn btn-outline btn-success" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-outline btn-error" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
           <button className="btn btn-outline btn-warning font-bold" onClick={handleEdit}>
            Edit Product
          </button>
          <button className="btn btn-outline btn-error" onClick={handleDelete}>
              Delete product
          </button>
          </>
        )}
      </div>
    </main>
  </>
) : (
  <>
    <p className='text-red-400 text-xl p-24 text-center'>Product deleted!</p>
    <Link href={"/"}>
      <p className='text-lg text-center text-green-400 hover:text-green-600'>Back to home page</p>
    </Link>
  </>
)}
</div>
  );
  };

export default SingleProductPage;
