import React from "react";
import Cartitem from "./Cartitem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <Cartitem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>Rs.4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-Rs.4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Rs.4697</span>
              </div>
              <div className="flex justify-between pt-3 text-bold">
                <span>Total Amount</span>
                <span className="text-green-600">Rs.4697</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              varient="contained"
              className="w-full mt-5"
              sx={{
                px: "2.5rem",
                py: ".7rem",
                color: "white",
                bgcolor: "#9155fd",
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
