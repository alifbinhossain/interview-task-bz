import React from "react";
import "./Post.css";
import { Card, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const Post = ({ post }) => {
  const { name, content, avatar, like, comment, share } = post;
  return (
    <Card sx={{ minWidth: 275, boxShadow: 2 }} className="post">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img src={avatar} alt="" />
          </Avatar>
        }
      />

      {/* -------------------------------------------------------------------------- */
      /*                                CARD CONTENT                                */
      /* -------------------------------------------------------------------------- */}
      <CardContent>
        <Typography
          variant="h3"
          sx={{ mb: 3, color: "#fff" }}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="#fff"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {content}
        </Typography>
      </CardContent>

      <Divider color="#fff" />

      {/* -------------------------------------------------------------------------- */
      /*                                 CARD FOOTER                                */
      /* -------------------------------------------------------------------------- */}
      <CardActions disableSpacing>
        <IconButton sx={{ color: "#fff" }} aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="p" sx={{ fontSize: "14px", ml: 1 }}>
            {like}
          </Typography>
        </IconButton>
        <IconButton sx={{ color: "#fff" }} aria-label="add to favorites">
          <InsertCommentIcon />{" "}
          <Typography variant="p" sx={{ fontSize: "14px", ml: 1 }}>
            {comment}
          </Typography>
        </IconButton>
        <IconButton sx={{ color: "#fff" }} aria-label="share">
          <ShareIcon />{" "}
          <Typography variant="p" sx={{ fontSize: "14px", ml: 1 }}>
            {share}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
