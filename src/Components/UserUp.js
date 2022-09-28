import React, { Component} from 'react';
import { useState,useEffect } from 'react';

import { Form, Button, Container, Row, Col } from "react-bootstrap";

// import  './allform.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export class UserUp extends Component {

    render() {
        return (
            <div>
                <Register/>
            </div>
        );
    }
}


function Register() {

     let[cust,setCust]= useState({});
    let user=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername 
    useEffect(()=>{
        console.log(user);
        fetch("http://localhost:8080/getcus/"+user)
        .then(res => res.json())
        .then( (result) => { setCust(result);  }
        );
        
        console.log(cust.c_city)
    },{});
        
    return (
        <Container fluid className="bg" align="center">
            <Form className="b">
                <div className="h">
                    <h1>Update Details</h1>
                </div>
                <Form.Group className="mb-3" controlId="Full Name">
                    <Form.Label><b>Full Name</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" value={cust.cname} ></Form.Control>
                       
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="State" >
                            <Form.Label><b>State</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter State"value={cust.c_state} />
                        
                        </Form.Group></Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label><b>City</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter City"/>
                        
                        </Form.Group></Col>
                </Row>





                <Form.Group className="mb-3" controlId="Address">
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" />
                <Form.Group className="mb-3" controlId="Contact No">
                    <Form.Label><b>Contact No</b></Form.Label>
                    <Form.Control type="numbers" placeholder=" Contact No" /> 
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ></Form.Control>
                    <Form.Text className="text-muted">

                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label><b>Username</b></Form.Label>
                            <Form.Control type="text" placeholder=" Username" ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="integer" placeholder=" Password" />
                        </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="outline-dark" type="submit" id="Book">
                        <b> Save Updates</b>
                    </Button>
                    </Form.Group>              
            </Form>
        </Container>

    )
}