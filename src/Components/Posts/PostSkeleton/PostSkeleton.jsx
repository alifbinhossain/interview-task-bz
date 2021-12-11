import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

const PostSkeleton = () => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 2 }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
      />
      <CardContent>
        <Typography variant="h3" sx={{ mb: 3 }}>
          <Skeleton></Skeleton>
        </Typography>
        <Typography variant="body2">
          <Skeleton sx={{ height: "8rem" }}></Skeleton>
        </Typography>
      </CardContent>

      <Divider color="#fff" />

      <CardActions disableSpacing>
        {Array.from(Array(3)).map((_, index) => (
          <IconButton key={index}>
            <Skeleton variant="circular" width={20} height={20}></Skeleton>
            <Typography variant="p" sx={{ ml: 1 }}>
              <Skeleton />
            </Typography>
          </IconButton>
        ))}
      </CardActions>
    </Card>
  );
};

export default PostSkeleton;
