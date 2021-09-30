import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import BlogsContainer from './containers/BlogContainer';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <Container>
         <Row className="row">
           <Col xs={12}>
             <h1>To Do List</h1>
             <Navigation />
             <Route exact path="/" component={ToDoListContainer} />
             <Route exact path="/new-item" component={AddToDo} />
           </Col>
         </Row>
        {/* <Login></Login> */}
        {/* <Blogs></Blogs> */}
        <Route exact path="/" component={BlogsContainer} />
      </Container>
    );
  }
}
export default App;