import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { FaHome } from "react-icons/fa";

const Orders = () => {
  const { products, address } = useSelector((store) => store.cart.orders);
  if (products.length < 1) {
    return (
      <div className="lg:px-10 lg:py-5 px-5 py-2">
        <div className="p-2 border font-bold text-xl">
          No order you have placed....
        </div>
      </div>
    );
  }
  return (
    <div className="lg:px-10 lg:py-5 px-5 py-2">
      <div className="border p-2">
        <h2 className="font-bold text-2xl mb-2 mx-2">
          Your ordered products will be delivered to you within 5 days...
        </h2>
        <div>
          <div className="flex items-start mb-2 border mx-2 p-2  w-[300px]">
            <FaHome size="1.5em" color="green" className="mr-2" />
            <div className="flex-1">
              <h2 className="text-lg font-bold">Address Details</h2>
              <p className="mb-4 font-medium text-sm">
                {address.houseDetail},{address.landmark},{address.city},
                {address.pincode}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
