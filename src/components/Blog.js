import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import { Card,Button } from 'react-bootstrap';
const Blog = ({title, body}) => (
      <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
      <Card.Title>Test {title}</Card.Title>
      <Card.Text>
        {body}
        {/* {blog.blogText} */}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

);
Blog.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};


export default Blog;