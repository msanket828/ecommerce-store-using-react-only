import React, { useEffect, useState } from "react";
import { PRODUCT_URL } from "../constants/constant";
import Product from "./Product";
import { loadAllProducts } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    const data = await fetch(`${PRODUCT_URL}`);
    const products = await data.json();
    setProducts(products);
    dispatch(loadAllProducts(products));
  };

  return (
    <div className="lg:px-10 lg:py-10 px-5 py-5 flex flex-wrap">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductList;
