import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AccountContext } from '../components/Account';

var email, password, authenticate;

function SetUp(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate } = useContext(AccountContext);
}

const onSubmit = event => {
    event.preventDefault();
    authenticate(email, password)
    .then(data => {
    console.log('Logged in!', data);
    })
    .catch(err => {
    console.error('Failed to login!', err);
    })
};

const Login = ({ title }) => <Form onSubmit={onSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>;

Login.propTypes = {
  title: PropTypes.string.isRequired
};

export default Login;


