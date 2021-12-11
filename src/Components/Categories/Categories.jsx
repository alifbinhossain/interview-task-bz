import { Grid } from "@mui/material";
import React from "react";
import "./Categories.css";
import Category from "./Category/Category";
import cate1 from "../../images/category-1.png";
import cate2 from "../../images/category-2.png";
import cate3 from "../../images/category-3.png";
import cate4 from "../../images/category-4.png";

const Categories = () => {
  const categoriesData = [
    { id: 1, title: "Backend", icon: "fas fa-code", img: cate1 },
    { id: 2, title: "Frontend", icon: "fas fa-laptop-code", img: cate2 },
    { id: 3, title: "Marketing", icon: "fas fa-bullhorn", img: cate3 },
    { id: 4, title: "Server", icon: "fas fa-cloud", img: cate4 },
  ];

  return (
    <section className="category">
      <h3>Categories</h3>
      <hr />
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {categoriesData.map((ele, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} data-aos="zoom-in">
            <Category data={ele}></Category>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Categories;
