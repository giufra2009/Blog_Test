import React from "react";
import { Link } from "react-router-dom";

import Card from "../shared/components/UIElements/Card";
import "./PostDetail.css";

const PostDetail = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="center">
        <h2>No Post found.</h2>
      </div>
    );
  }
  return (
    <div className="blogs-post">
      <Card>
        <div className="blog-post__image">
          <img
            className="avatar"
            src={`/assets/${props.item.image}`}
            alt={props.item.title}
          />
        </div>
        <div className="blog-item__info">
          <h2>{props.item.title}</h2>
          <h5>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(props.item.data))}
          </h5>
          <h5>
            <span>Created By: {props.item.created}</span>
          </h5>

          <h3>{props.item.testo}</h3>
        </div>
        <hr></hr>
        <div className="back">
          <Link to={`/`}>Back to List</Link>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
