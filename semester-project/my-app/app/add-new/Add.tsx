"use client"
import { useProductContext } from "@/context/ProductContext";
import React, { use, useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [category, setCategory] = useState("");
  const [lastGeneratedId, setLastGeneratedId] = useState(0);
  const [message, setMessage] = useState("")


  const { addProduct } = useProductContext();

  const add = () => {
    if (!title || isNaN(price) || price <= 0) {
      // Show a message element
      setMessage("Please provide a product title and price.");
      setTimeout(() => {
        setMessage("");
      }, 5000);
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
      category:category
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
      setSuccessMessage("Product added successfully!");

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }, 1000);
   
  };

  return (
    <>
    <div className="flex items-center justify-center my-12 text-orange-300 animate-pulse text-xl">
      {message}
    </div>

   <div className="flex flex-col items-center justify-center gap-8">
  <label className="flex flex-col items-start">
    Title:
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="border-2 rounded-lg p-1 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
    Price:
    <input
      type="number"
      value={price}
      onChange={(e) => setPrice(parseInt(e.target.value))}
      className="border-2 rounded-lg p-1 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
    Description:
    <input
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="border-2 rounded-lg p-1 mt-1"
    />
  </label>
  <label className="flex flex-col items-start">
    Category:
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border-2 rounded-lg p-1 mt-1"
    >
      <option value="Select category:">Select product category:</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Home and Garden">Home and Garden</option>
    </select>
  </label>

   
    <label className="flex flex-col items-start">
        Product image:
        <input
        type="file"
        id="image-input"
        multiple
        onChange={(e) => console.log(e.target.files)}
        className="border-2 rounded-lg p-1 mt-1"
        />
    </label>

  <button className="w-52 border-2 rounded-lg bg-sky-200 hover:bg-green-400" onClick={add}>
    {loading ? "Adding product..." : "Add your product"}
  </button>

  <div className="text-green-500 mt-2 animate-pulse text-center text-xl">
    <p>{successMessage}</p>
  </div>
</div>

  </>
  );
};

export default Add;
