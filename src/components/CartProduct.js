import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDecrement,
  handleIncrement,
  removeFromCart,
} from "../redux/cartSlice";

const CartProduct = (props) => {
  const { id, image, title, description, price, rating } = props;
  const { cartProducts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState();

  useEffect(() => {
    const { count } = cartProducts.find((prod) => prod.id === id);
    setCount(count);
  }, [cartProducts]);

  return (
    <div>
      <div className="block p-2 border bg-white shadow-lg mb-4">
        <img src={image} alt="image" className="product_image" />
        <h2 className="mt-4 text-md font-bold">{title}</h2>
        <h3 className="my-2 flex items-center text-lg font-bold">
          <IoMdPricetags />
          &nbsp;{price}
        </h3>
        <div className="flex items-center mb-4">
          <h5 className="font-bold text-lg mr-2">Quantity:</h5>
          <div className="flex">
            <button onClick={() => dispatch(handleIncrement(id))}>
              <CiCirclePlus size="2em" />
            </button>
            <h3 className="w-[30px] text-center text-lg">{count}</h3>
            <button onClick={() => dispatch(handleDecrement(id))}>
              <CiCircleMinus size="2em" />
            </button>
          </div>
        </div>
        <button
          className="text-lg w-full text-white font-bold px-4 py-2 bg-red-700 rounded-md"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
