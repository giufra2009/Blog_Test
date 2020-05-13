import React from "react";

import "./BlogsList.css";


import BlogItem from "./BlogItem";
const BlogsList = (props) => {
  
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Posts found.</h2>
      </div>
    );
  }

  return (
    <ul className="blogs-list">
      {props.items.map((blog) => {
        return (
          <BlogItem
            key={blog._id}
            id={blog._id}
            image={blog.image}
            title={blog.title}
            data={blog.data}
            testo={blog.testo}
            created={blog.created}
          />
        );
      })}
    </ul>
  );
};

export default BlogsList;
