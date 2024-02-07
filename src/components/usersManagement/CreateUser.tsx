import { ChangeEvent, FormEvent, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { ICreateUser } from "./Users.interface";
import { CreateUserBack } from "./UsersManagementController";

const CreateUser = () => {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    first_name: '',
    second_name: '',
    last_name: '',
    celphone: '',
    is_admin: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value: string | boolean = e.target.value;
    if (e.target.type === 'checkbox') {
      value = (e.target as HTMLInputElement).checked  ? true : false;
    }
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  
  

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = new ICreateUser(
        user.email,
        user.username,
        user.password,
        user.first_name,
        user.second_name,
        user.last_name,
        user.celphone,
        user.is_admin
      );
      console.log(newUser);
      const result = await CreateUserBack(newUser);
      console.log(result)    
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" name="username" value={user.username} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" name="first_name" value={user.first_name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formSecondName">
        <Form.Label>Second Name</Form.Label>
        <Form.Control type="text" placeholder="Enter second name" name="second_name" value={user.second_name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name="last_name" value={user.last_name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formCelphone">
        <Form.Label>Celphone</Form.Label>
        <Form.Control type="text" placeholder="Enter celphone" name="celphone" value={user.celphone} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formIsAdmin">
        <Form.Check type="checkbox" label="Is Admin?" name="is_admin" checked={user.is_admin} onChange={(e) => setUser({ ...user, is_admin: e.target.checked })} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateUser;
