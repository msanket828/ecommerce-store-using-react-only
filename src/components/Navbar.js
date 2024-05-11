import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cartProducts, orders } = useSelector((store) => store.cart);
  return (
    <div className="bg-cyan-800 lg:px-10 px-5 py-5">
      <nav className="flex items-center">
        <NavLink to="/" className="lg:text-3xl text-2xl font-bold text-white">
          MyStore
        </NavLink>
        <ul className="ml-auto flex items-center">
          <li className="mr-4">
            <NavLink to="/" className="font-bold text-md text-white uppercase">
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink to="/cart" className="relative">
              <span className="absolute -top-5 -right-2 font-bold text-sm text-white bg-black w-6 h-6 rounded-full flex items-center justify-center">
                {cartProducts.length}
              </span>
              <CiShoppingCart size="2em" color="#FFF" />
            </NavLink>
          </li>
          {Object.values(orders.products).length > 0 && (
            <li>
              <NavLink
                to="/orders"
                className="font-bold text-md text-white uppercase"
              >
                Orders
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
