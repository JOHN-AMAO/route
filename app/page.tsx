// pages/index.tsx
"use client";

import React, { useState } from "react";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type='text'
        onChange={() => setSearch(search)}
      />
      <button
        onClick={() => {
          setSearch(search);
          window.open("/search");
        }}
      >
        Search
      </button>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>
          Welcome to our E-commerce Store
        </h1>
        <p className='text-lg mb-4'>
          Explore a wide range of high-quality products from various categories.
          From fashion to electronics, we have something for everyone.
        </p>
        <h2 className='text-2xl font-bold mb-2'>What to Expect</h2>
        <ul className='list-disc pl-4'>
          <li className='text-lg mb-2'>
            Quality products at competitive prices
          </li>
          <li className='text-lg mb-2'>Fast and reliable shipping</li>
          <li className='text-lg mb-2'>Responsive customer support</li>
          <li className='text-lg mb-2'>Easy returns and exchanges</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
