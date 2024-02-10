"use client"
import { useProductContext } from "@/context/ProductContext";
import Link from "next/link";
import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { FaClipboardList } from 'react-icons/fa';
import illustration from '@/public/uploading-8694003-6983292.png'
import Image from "next/image";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState("");
  const [lastGeneratedId, setLastGeneratedId] = useState(0);
  const [message, setMessage] = useState("")
  const [customCategory, setCustomCategory]= useState("");
  


  const { addProduct } = useProductContext();

  const add = () => {
    if (!title || isNaN(price) || price <= 0) {
      toast.error("Please provide a valid produt title and price!",{
        duration:4000,
      });
      return;
    }
    setLoading(true);
    const generatedId = lastGeneratedId + 1;
    console.log('Generated Product ID:', generatedId);
    setLastGeneratedId(generatedId);

    const imageInput = document.getElementById("image-input") as HTMLInputElement;
    const images: string[] = [];

    if (imageInput && imageInput.files) {
      for (let i = 0; i < imageInput.files.length; i++) {
        const file = imageInput.files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && e.target.result) {
            images.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }


    addProduct({
      id: generatedId,
      title: title,
      price: price,
      description: description,
      images:images,
      category: category === "Other" ? customCategory : category,
      customCategory:customCategory
    });

    setTimeout(() => {
      setLoading(false);
      setTitle("");
      setPrice(0);
      setDescription("");
      setCategory("");
      const imageInput = document.getElementById("image-input") as HTMLInputElement;
      if (imageInput) {
        imageInput.value = "";
      }

      // Clear success message after 2 seconds
      setTimeout(() => {
        toast.success("Product added to Home Page sucessfully!",{
          duration:4000,
        })
      }, 1000);
    }, 1000);
   
  };

  return (
    <>


    <div className="flex flex-row justify-start mt-1 ml-1">
        <Link href={"/"}>
        <span className="mr-2">🏡</span> Back to Home
        </Link>
    </div>


    <div className="text-center mt-8 mb-16 xs:flex-col gap-8 md:flex md:flex-row items-center justify-center">
      <div className="xs:mb-8">
        <Image
          src={illustration}
          alt="addproduct-illustration"
          className="xs:m-auto"
        />
      </div>
      <div className="ml-8 flex flex-col justify-evenly gap-16">
        <h2 className="mr-2 text-3xl font-bold mb-4 xs:text-center">
          List your product for sale
        </h2>
        <p className="text-xl text-gray-600 xs:text-center mr-2">
          Ready to showcase your products to the world? Fill out the fields below and start selling!
        </p>
      </div>
    </div>

  

<div className="flex flex-col items-center justify-center gap-8 w-full">
  <h1 className="text-2xl mb-8">Your Product Information:</h1>
  <label className="flex flex-col items-start">
    Title:
    <input
      id="text"
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border-2 rounded-lg p-1 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
    Price:
    <input
      id="number"
      type="number"
      value={price}
      onChange={(e) => setPrice(parseInt(e.target.value))}
      className="border-2 rounded-lg p-1 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
    Description:
    <textarea
      id="description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border-2 rounded-lg p-4 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
  Category:
  <select
    id="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border-2 rounded-lg p-1 mt-1"
  >
    <option value="">Select product category:</option>
    <option value="Electronics">Electronics</option>
    <option value="Clothing">Clothing</option>
    <option value="Home and Garden">Home and Garden</option>
    <option value="Other">Other</option>
  </select>

  {/* Allow user to input their own category */}
  {category === "Other" && (
    <input
      type="text"
      placeholder="Enter your category"
      value={customCategory}
      onChange={(e) => setCustomCategory(e.target.value)}
      className="border-2 rounded-lg p-1 mt-1"
    />
  )}
</label>

    <label className="flex flex-col items-start">
        Product image:
        <input
        type="file"
        id="image-input"
        onChange={(e) => console.log(e.target.files)}
        className="border-2 rounded-lg p-1 mt-1"
        />
    </label>

  <button className="w-52 border-2 p-1 rounded-lg bg-green-300 hover:bg-green-500" onClick={add}>
    {loading ? "Adding product..." : "Add your product"}
  </button>
</div>

  </>
  );
};

export default Add;
