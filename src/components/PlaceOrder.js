import { useFormik } from "formik";
import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { placedOrder } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    //initial value
    initialValues: {
      houseDetail: "",
      landmark: "",
      city: "",
      pincode: "",
    },

    //actual detail validation
    validationSchema: Yup.object({
      houseDetail: Yup.string().required(
        "House no or building detail required"
      ),
      landmark: Yup.string().required("Landmark is required"),
      city: Yup.string().required("City is required"),
      pincode: Yup.number().required("Pincode is required"),
    }),

    //submit event
    onSubmit: (values) => {
      console.log(values);
      dispatch(placedOrder(values));
      navigate("/orders");
    },
  });

  return (
    <div className="lg:px-10 lg:py-5 px-5 py-2">
      <div className="border p-2">
        <div className="flex items-center mb-4">
          <FaHome size="1.5em" color="green" className="mr-2" />
          <h2 className="text-lg font-bold flex-1">Address Details</h2>
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mb-1">
            <label htmlFor="" className="block mb-2 font-medium">
              Building/house no
            </label>
            <input
              type="text"
              name="houseDetail"
              id="houseDetail"
              className="border w-[90%]"
              value={formik.values.houseDetail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className={
                formik.touched.houseDetail && formik.errors.houseDetail
                  ? "visible text-red-700 font-medium text-sm"
                  : "invisible text-sm"
              }
            >
              ** {formik.errors.houseDetail}
            </p>
          </div>
          <div className="mb-1">
            <label htmlFor="" className="block mb-2 font-medium">
              Landmark
            </label>
            <input
              type="text"
              name="landmark"
              id="landmark"
              className="border w-[90%]"
              value={formik.values.landmark}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className={
                formik.touched.landmark && formik.errors.landmark
                  ? "visible text-red-700 font-medium text-sm"
                  : "invisible text-sm"
              }
            >
              ** {formik.errors.landmark}
            </p>
          </div>
          <div className="mb-1">
            <label htmlFor="" className="block mb-2 font-medium">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="border w-[90%]"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className={
                formik.touched.city && formik.errors.city
                  ? "visible text-red-700 font-medium text-sm"
                  : "invisible text-sm"
              }
            >
              ** {formik.errors.city}
            </p>
          </div>
          <div className="mb-1">
            <label htmlFor="" className="block mb-2 font-medium">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              className="border w-[90%]"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p
              className={
                formik.touched.pincode && formik.errors.pincode
                  ? "visible text-red-700 font-medium text-sm"
                  : "invisible text-sm"
              }
            >
              ** {formik.errors.pincode}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <CiMoneyBill size="2em" color="green" className="mr-2" />
            <h3 className="text-lg font-bold">
              Note: Currently we are only providing cash on delivery option
            </h3>
          </div>
          <button
            type="submit"
            className="py-1 px-4 bg-green-600 text-white font-bold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
