import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

const OrderCard = () => {
  return (
    <div className="mt-10 p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://www.bing.com/th?id=OPA.Fr0p3IAV0K%2ffqA474C474&o=5&pid=21.1&w=142&h=142&rs=1&qlt=100&dpr=1"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, eius!
              </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>Rs.1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on sep 02</span>
              </p>
              <p className="textx">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Delivered on sep 02</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
