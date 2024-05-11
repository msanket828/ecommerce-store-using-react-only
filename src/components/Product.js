import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, image, price, title, description, category, rating } = props;
  return (
    <div className="lg:w-1/4 sm:w-1/2 w-full p-2">
      <Link to={`/${id}`} className="block border p-2 bg-white shadow-lg">
        <img src={image} alt="image" className="product_image" />
        <h2 className="mt-4 text-md font-bold">{title}</h2>
        <p className="mt-2 text-md font-normal truncate">{description}</p>
        <h3 className="mt-2 flex items-center text-lg font-bold">
          <IoMdPricetags />
          &nbsp;{price}
        </h3>
        <h5 className="flex items-center">
          <FaStar />
          &nbsp;{rating.rate}
        </h5>
      </Link>
    </div>
  );
};

export default Product;
