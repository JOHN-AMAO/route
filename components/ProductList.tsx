import { products } from "@/data/products";
import React from "react";

const ProductList = ({ products }: any) => {
  return (
    <div>
      {products.map((product: any, key: any) => (
        <div key={key}>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
