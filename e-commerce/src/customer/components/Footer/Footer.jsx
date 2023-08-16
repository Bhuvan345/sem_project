import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid className="pt-1" item xs={12}>
          <Typography variant="body1" component="p" align="center">
            &copy; 2023 Bhuvan & team. All rights are reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
