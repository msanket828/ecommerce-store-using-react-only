import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PRODUCT_URL } from "../constants/constant";
import {
  addTocart,
  IsDuplicateProd,
  removeFromCart,
  updateCount,
} from "../redux/cartSlice";
import useCounter from "./counter-custom-hook";

const ProductItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { count, handleDecrement, handleIncrement } = useCounter(1);
  const [product, setProduct] = useState([]);
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const [isProdPresent, setIsProdPresent] = useState(false);

  useEffect(() => {
    getIndividalProductItem();
  }, []);

  const getIndividalProductItem = async () => {
    const data = await fetch(`${PRODUCT_URL + "/" + id}`);
    const product = await data.json();
    setProduct(product);
  };

  useEffect(() => {
    const productAlreadyExistInCart = cartProducts?.some(
      (prod) => prod.id === product.id
    );

    if (productAlreadyExistInCart) {
      setIsProdPresent(true);
    } else {
      setIsProdPresent(false);
    }
    console.log("inside useEffect", cartProducts, product);
  }, [cartProducts, product]);

  return product ? (
    <div className="lg:py-10 lg:px-10 py-5 px-5">
      <div className="flex lg:flex-row flex-col border">
        <div className="lg:w-1/2 w-full">
          <div className="p-4">
            <img
              src={product.image}
              alt="image"
              className="lg:h-[350px] h-[250px] mx-auto"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="p-4">
            <h2 className="mt-4 text-xl font-bold">{product.title}</h2>
            <p className="mt-2 text-md font-normal">{product.description}</p>
            <h3 className="mt-4 flex items-center text-xl font-bold">
              <IoMdPricetags />
              &nbsp;{product.price}
            </h3>
            <h5 className="mt-4 text-lg font-bold flex items-center mb-4">
              <FaStar />
              &nbsp;{product.rating?.rate}
            </h5>
            {!isProdPresent && (
              <div className="flex items-center mb-4">
                <h5 className="font-bold text-lg mr-2">Quantity:</h5>
                <div className="flex">
                  <button onClick={handleIncrement}>
                    <CiCirclePlus size="2em" />
                  </button>
                  <h3 className="w-[30px] text-center text-lg">{count}</h3>
                  <button onClick={handleDecrement}>
                    <CiCircleMinus size="2em" />
                  </button>
                </div>
              </div>
            )}
            {isProdPresent ? (
              <button
                className="text-lg text-white font-bold px-4 py-2 bg-red-700 rounded-md"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="text-lg text-white font-bold px-4 py-2 bg-green-700 rounded-md"
                onClick={() => dispatch(addTocart({ ...product, count }))}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductItem;
