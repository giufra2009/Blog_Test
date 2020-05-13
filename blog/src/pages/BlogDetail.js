import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostDetail from "../components/PostDetail";

const BlogDetail = () => {

  const idPost = useParams().id; 

  const [loadedPost, setLoadedPost] = useState(); 
 

  useEffect(() => {
    const sendRequest = async () => {
     

      try {
        const response = await fetch(
          process.env.REACT_APP_BLOG_BACKEND_URL + `/posts/${idPost}`
        );

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedPost(responseData);
       
      } catch (err) {
        console.lo(err.message);
      }

     
    };

    sendRequest();
  }, [idPost]);

  return (
    <React.Fragment>
      {loadedPost && <PostDetail item={loadedPost} />}
    </React.Fragment>
  );
};

export default BlogDetail;
