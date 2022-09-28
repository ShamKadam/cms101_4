import React, { Component} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import  './allform.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export class Yupcustomer extends Component {

   
    

    render() {
        return (
            <div>
                <Register/>
            </div>
        );
    }
}


function Register() {
    const formik = useFormik({
        initialValues: {
            cname: '',
            c_city: '',
            c_address: '',
            c_state: '',
            contact:'',
            email: '',
            userid: '',
            password: '',

        },
        validationSchema: yup.object({
            cname: yup.string()
                
                .required('please enter Full Name'),

            c_address: yup.string()

                .required('Please Enter Your Address')
                .min(2,'Address should be more than 2 letters'),

            c_state: yup.string()

            .required('Please Enter State'),

            c_city: yup.string()

                .required('Please Enter City'),

            email: yup.string()

            .email('Invalid email address')

            .required('Please Enter Email Id'),
            contact: yup.string()
           
            .max(10,'please enter valid No.')
           
            .required('A phone number is required'),
            userid: yup.string()
            
            
                .required('Please Enter Username '),
            password: yup.string()
           
                .required('Please Enter Password '),
        }),
        onSubmit: values => {
          
            let demo =JSON.stringify(values);
            console.log(JSON.parse(demo));
          fetch("http://localhost:8080/addCus",{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: demo
         
      })
      alert("customer registered successfully");

      
        },
    });
    return (
        <Container fluid className="bg" align="center">
            <Form onSubmit={formik.handleSubmit}className="b">
                <div className="h">
                    <h1>Registeration Form</h1>
                </div>
                <Form.Group className="mb-3" controlId="Full Name">
                    <Form.Label><b>Full Name</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Full Name" value={formik.values.cname}
                        {...formik.getFieldProps("cname")} />{formik.touched.cname && formik.errors.cname ?
                            <span style={{ color: 'red' }}>{formik.errors.cname}</span> : null}
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="State" >
                            <Form.Label><b>State</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter State" value={formik.values.c_state}
                        {...formik.getFieldProps("c_state")} />{formik.touched.c_state && formik.errors.c_state ?
                            <span style={{ color: 'red' }}>{formik.errors.c_state}</span> : null} 
                        </Form.Group></Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label><b>City</b></Form.Label>
                            <Form.Control type="text" placeholder="Enter City" value={formik.values.c_city}
                        {...formik.getFieldProps("c_city")} />{formik.touched.c_city && formik.errors.c_city ?
                            <span style={{ color: 'red' }}>{formik.errors.c_city}</span> : null} 
                        </Form.Group></Col>
                </Row>





                <Form.Group className="mb-3" controlId="Address">
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" value={formik.values.c_address}
                        {...formik.getFieldProps("c_address")} />{formik.touched.c_address && formik.errors.c_address ?
                            <span style={{ color: 'red' }}>{formik.errors.c_address}</span> : null} 
                <Form.Group className="mb-3" controlId="Contact No">
                    <Form.Label><b>Contact No</b></Form.Label>
                    <Form.Control type="numbers" placeholder=" Contact No" value={formik.values.contact}
                        {...formik.getFieldProps("contact")} />{formik.touched.contact && formik.errors.contact ?
                            <span style={{ color: 'red' }}>{formik.errors.contact}</span> : null} 
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formik.values.email}
                        {...formik.getFieldProps("email")} />{formik.touched.email && formik.errors.email ?
                            <span style={{ color: 'red' }}>{formik.errors.email}</span> : null} 
                    <Form.Text className="text-muted">

                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Username">
                            <Form.Label><b>Username</b></Form.Label>
                            <Form.Control type="text" placeholder=" Username" value={formik.values.userid} name="userid"
                        {...formik.getFieldProps("userid")} />{formik.touched.userid && formik.errors.userid ?
                            <span style={{ color: 'red' }}>{formik.errors.userid}</span> : null} 
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="Password">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control type="integer" placeholder=" Password" value={formik.values.password} name="password"
                        {...formik.getFieldProps("password")} />{formik.touched.password && formik.errors.password ?
                            <span style={{ color: 'red' }}>{formik.errors.password}</span> : null} 
                        </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="outline-dark" type="submit" id="Book">
                        <b> Register Here</b>
                    </Button>
                    </Form.Group>              
            </Form>
        </Container>

    )
}