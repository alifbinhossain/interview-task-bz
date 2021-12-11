import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import "./Posts.css";
import PostSkeleton from "./PostSkeleton/PostSkeleton";

const Posts = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("./Post.json");
      const data = await res.json();
      setPost(data);
    }, 3500);
  });

  return (
    <section className="posts" data-aos="fade-up">
      <h2>Posts</h2>
      <hr className="hr" />
      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 6, sm: 6, md: 6 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={6} md={3} key={index}>
            {post && window.scrollY > 1400 ? (
              <Post post={post}></Post>
            ) : (
              <PostSkeleton></PostSkeleton>
            )}
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Posts;
