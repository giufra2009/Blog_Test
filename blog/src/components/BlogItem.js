import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/components/UIElements/Card";
import "./BlogItem.css";

const BlogItem = (props) => {
  const toShow = props.testo.substring(0, 100) + "...";
console.log()
  return (
    <li className="blog-item">
      <div className="blog-item__content">
        <Card>
          <div className="blog-item__image">
            <img
              className="avatar"
              src={`assets/${props.image}`}
              alt={props.title}
            />
          </div>
          <div className="blog-item__info">
            <h2>{props.title}</h2>
            <h5>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(new Date(props.data))}
            </h5>
            <h5>
              <span>Created By: {props.created}</span>
            </h5>
            <Link to={`/post/${props.id}`}>
              <h3>{toShow}</h3>
            </Link>
          </div>
        </Card>
      </div>
    </li>
  );
};

export default BlogItem;
