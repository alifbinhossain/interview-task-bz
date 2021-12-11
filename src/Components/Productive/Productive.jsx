import { Stack } from "@mui/material";
import React from "react";
import "./Productive.css";

const Productive = () => {
  return (
    <Stack
      className=" productive"
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      alignItems="center"
    >
      <div className="productive-details">
        <span className="icon">g</span>
        <span className="headings">
          <h4>Be more productive</h4>
          <p>Look back is free to try for 14 days</p>
        </span>
      </div>
      <button>Sign Up</button>
    </Stack>
  );
};

export default Productive;
