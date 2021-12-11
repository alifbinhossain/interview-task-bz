import { Grid } from "@mui/material";
import React from "react";
import Post from "./Post/Post";
import "./Posts.css";
import avatar from "../../images/avatar.png";

const Posts = () => {
  const post = {
    name: "A Guide To Rocky Mountain Vacations",
    content:
      "These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on",
    avatar: avatar,
    like: 325,
    comment: 115,
    share: 47,
  };
  return (
    <section className="posts">
      <h2>Posts</h2>
      <hr className="hr" />
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 6, sm: 6, md: 6 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Post post={post}></Post>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Posts;
