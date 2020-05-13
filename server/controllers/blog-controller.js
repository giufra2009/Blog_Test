const exceptionHandler = require("../models/http-error");

const Blog = require("../models/blog");

// get list of Blog's post
const getListPost = async (req, res, next) => {
  const blogslist = await Blog.find({});

  res.json(blogslist.map((blog) => blog.toObject({ getters: true })));
};

// get single post by Id
const getPostByID = async (req, res, next) => {
  const postId = req.params.ID;

  let post;

  try {
    post = await Blog.findById(postId);
  } catch (err) {
    const error = new exceptionHandler(
      "Somwthing went wrong, could not find a post",
      500
    );
    return next(error);
  }
  if (!post) {
    throw new exceptionHandler("Could not find a post for the blog id.", 404);
  }

  res.json(post.toObject());
};

exports.getPostByID = getPostByID;
exports.getListPost = getListPost;
