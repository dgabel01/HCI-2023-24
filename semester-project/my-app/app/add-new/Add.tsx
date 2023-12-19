"use client"
import { useProductContext } from "@/context/ProductContext";
import React, { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState("");


  const { addProduct } = useProductContext();

  const add = () => {
    setLoading(true);
    const generatedId = Math.random();
    console.log('Generated Product ID:', generatedId);
    addProduct({
      id: generatedId,
      title: title,
      price: price,
      description: description,
      images: "",
    });

    setTimeout(() => {
      setLoading(false);
      setTitle("");
      setPrice(0);
      setDescription("");
      setSuccessMessage("Product added successfully!");

      // Clear success message after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }, 1000);
   
  };

  return (
    <div className="flex flex-col items-center justify-center my-4 p-1 gap-8">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 rounded-lg mx-2 p-1"
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="border-2 rounded-lg mx-2 p-1"
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 rounded-lg mx-2 p-1"
        />
      </label>
      <button className="col-span-2 w-52 place-self-center border-2 rounded-lg bg-sky-200" onClick={add}>
        {loading? "Adding product...":"Send"}
      </button>

      <div className="col-span-2 text-green-500 mt-2 animate-pulse text-center">
        <p>{successMessage}</p>
      </div>

    </div>
  );
};

export default Add;
