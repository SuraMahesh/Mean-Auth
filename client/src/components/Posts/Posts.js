import React from "react";
import Post from "./Post/Post";
import useStyle from "./style";
import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  
  const classes = useStyle();
  console.log(posts);


  return <div>Post</div>;
};

export default Posts;
