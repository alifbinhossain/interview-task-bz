import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./Category.css";

const Category = ({ data }) => {
  const { title, icon, img } = data;
  return (
    <Card sx={{ minWidth: 275 }} className="card">
      <CardContent className="card-content">
        <CardMedia component="img" image={img} alt={`Image of ${title}`} />
        <div className="card-details">
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontSize: 14 }}
            gutterBottom
          >
            {title}
          </Typography>
          <i className={icon}></i>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category;
