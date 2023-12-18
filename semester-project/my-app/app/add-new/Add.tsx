"use client"
import { useProductContext } from "@/context/ProductContext";
import React, { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const { addProduct } = useProductContext();

  const add = () => {
    const generatedId = Math.random();
    console.log('Generated Product ID:', generatedId);
    addProduct({
      id: generatedId,
      title: title,
      price: price,
      description: description,
      images: "",
    });
    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button className="col-span-2 w-52 place-self-center" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default Add;
