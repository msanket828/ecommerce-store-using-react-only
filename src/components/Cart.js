import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartProducts } = useSelector((store) => store.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cartProducts.reduce(
      (acc, current) => acc + current.price * current.count,
      0
    );
    console.log(total);
    setTotal(total.toFixed(2));
  }, [cartProducts, cartProducts.count]);
  console.log(cartProducts.length);
  if (cartProducts.length < 1) {
    return (
      <div className="lg:px-10 lg:py-5 px-5 py-2">
        <div className="border p-2">
          <h2 className="text-lg font-bold">Your cart is empty.....</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="lg:py-10 lg:px-10 px-5 py-2">
      <div className="flex lg:flex-row flex-col gap-2">
        <div className="lg:w-3/5 w-full">
          {cartProducts.map((product) => {
            return <CartProduct key={product.id} {...product} />;
          })}
        </div>
        <div className="lg:w-2/5 w-full border p-2">
          <div className="flex mb- border-b-4 mb-4">
            <h2 className="text-lg font-bold flex-1">Products</h2>
            <h2 className="text-lg font-bold w-10 text-center">Qty</h2>
            <h2 className="text-lg font-bold w-40 text-center">Price</h2>
          </div>
          <ul className="mb-4">
            {cartProducts.map((prod) => {
              return (
                <li key={prod.id} className="mb-2 flex">
                  <h2 className="text-sm flex-1">{prod.title}</h2>
                  <p className="w-10 text-center">{prod.count}</p>
                  <p className="w-40 text-center">{prod.price * prod.count}</p>
                </li>
              );
            })}
            <li className="mb-2 flex border-t-2 font-bold text-lg">
              <h2 className="flex-1">Grand total</h2>
              <h2 className="w-40 text-center">{total}</h2>
            </li>
          </ul>
          <Link
            to="/place-order"
            className="inline-block lg:w-[250px] w-full bg-green-700 font-bold text-xl py-2 rounded-md text-white text-center"
          >
            Place order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
