import React, { useEffect, useState } from "react";
import BlogsList from "../components/BlogsList";

const Blogs = () => {

  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const sendRequest = async () => {
    
      try {
        const response = await fetch(process.env.REACT_APP_BLOG_BACKEND_URL +"/posts");
        
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedPosts(responseData);
       
      } catch (err) {         
        console.log(err.message);
      }

     
    };
    sendRequest();
   
  }, []);

 

  return(
  <React.Fragment>
    { loadedPosts && <BlogsList items={loadedPosts} />}
  </React.Fragment>
  );
};

export default Blogs;
