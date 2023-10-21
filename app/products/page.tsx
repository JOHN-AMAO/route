// pages/index.tsx

import React from "react";

import ProductList from "@/components/ProductList";
import { products } from "@/data/products";

const Home: React.FC = () => {
  return (
    <div>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Featured Products</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
