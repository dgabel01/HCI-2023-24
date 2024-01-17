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
  const [lastGeneratedId, setLastGeneratedId] = useState(-1);



  const { addProduct } = useProductContext();

  const add = () => {
    setLoading(true);
    const generatedId = lastGeneratedId + 1;
    console.log('Generated Product ID:', generatedId);
    setLastGeneratedId(generatedId); 

    addProduct({
      id: generatedId,
      title: title,
      price: price,
      description: description,
      images: "",
      category:category
    });

    setTimeout(() => {
      setLoading(false);
      setTitle("");
      setPrice(0);
      setDescription("");
      setCategory("");
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
      <label>
       Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 rounded-lg mx-2 p-1"
        >
          <option value="Select category:">Select category:</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home and Garden">Home and Garden</option>
        </select>
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
