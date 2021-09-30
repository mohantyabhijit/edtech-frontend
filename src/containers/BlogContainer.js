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
  return {
    blogs: state.blog
  };
};

const BlogsContainer = connect(mapStateToProps)(Blog);

export default BlogsContainer;