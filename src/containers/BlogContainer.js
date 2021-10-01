import { connect } from 'react-redux';
import Blog from '../components/Blog';

const mapStateToProps = state => {
  // console.log("State coming to component is -> \n");
  // const {blog} = state;
  // console.log(state);
  // console.log(JSON.stringify(state));
  // console.log(blog);
  // console.log(blog.blogText);
  // const {blog} = state;
  // const blogData = state.toJson();
  // console.log(blogData);
  return {
    blogs: state, 
  };
};

const BlogsContainer = connect(mapStateToProps)(Blog);

export default BlogsContainer;