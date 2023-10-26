import React from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <div id='Navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    <div id='Login'>
      <p>Sign In</p>
        <Form action='/login' method='post'>
          <input type='email' id='email' name='email' placeholder='Enter Email' required></input>
          <input type='password' id='password' name='password' placeholder='Enter Password' required></input>
          <Button type='submit'>Sign In</Button>
          <p>Need to Create an Account?<Link to='./SignUpPage'>Click Here</Link></p>
          <p>Forgot Password?</p>
        </Form>
    </div>
    </>
  )
}

export default HomePage