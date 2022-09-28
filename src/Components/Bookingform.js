import React from 'react';
import { useFormik} from 'formik';
import * as yup from 'yup';
import './allform.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

const disablePastDate = () => {
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    return year + '-' + month + '-' + day;
        };
    

export class Yupbooking extends React.Component {



  
    render() {
        return (
            <div>
                <Booking />
                <disablePastDate/>
            </div>
        );
    }
}

function Booking(props) {
    
    const [hotel,setHotel]=useState({});
  
    const {id} = useParams()
    
      useEffect(()=> {
          console.log(id);
          fetch("http://localhost:8080/GetHotel/"+id)
          .then(res => res.json())
          .then( (result) => { setHotel(result);   }
          );    
           console.log(hotel.h_address)
      },{});

      
      const demo1=JSON.parse(window.sessionStorage.getItem('userdata'));
            console.log(demo1)

      
    

    

    const formik = useFormik({
        

        enableReinitialize: true,
    
        initialValues: {
            HotelAddress: hotel.h_address,
            FullName: demo1[0].cname,
            Address: demo1[0].c_address,
            State: demo1[0].c_state,
            City: demo1[0].c_city,
            ContactNo: demo1[0].contact,
          
            Email:demo1[0].email,
            check_in: '',
            check_out: '',


        },
        validationSchema: yup.object({
            HotelAddress: yup.string()

                .required('please enter Hotel address'),

            FullName: yup.string()

                .max(25, 'FullName should not exceed 25 Characters')
                .min(2, 'FullName should be more than 2 letters')

                .required('Please Enter Your FullName'),


            Address: yup.string()

                .required('Please Enter Your Address')
                .min(2, 'Address should be more than 2 letters'),

            State: yup.string()

                .required('Please Enter State'),

            City: yup.string()

                .required('Please Enter City'),

            Email: yup.string()

                .email('Invalid email address')

                .required('Please Enter Email Id'),
            ContactNo: yup.string()

                .max(10, 'please enter valid No')

                .required('A phone number is required'),

            
           
            check_in: yup.string()


                .required('Please Enter Check-in date'),
            check_out: yup.string()

                .required('Please Enter Check-out date'),
        }),
        
       
        onSubmit: values => {
            
            let data={"check_in":formik.values.check_in,"check_out":formik.values.check_out,hotel:{"idhotel":hotel.idhotel,"h_address":hotel.h_address},customer:{"idcustomer":demo1[0].idcustomer,"cname":demo1[0].cname,"email":demo1[0].email}};
            let demo =JSON.stringify(data);
         
           // console.log(JSON.parse(demo));
          fetch("http://localhost:8080/crud/add",{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: demo
         
      })
      console.log(demo);
      alert("Booking  successfully");

      
        },
    });


    


    return (
        <Container fluid className="bg" align="center">
            <Form onSubmit={formik.handleSubmit} className="b">
                <div className="h">
                    <h1>Book Your Joy Now</h1>
                </div>
                <Row>
                    <Form.Group className="mb-3" controlId="Hotel Address" id='HA'>
                        <Form.Label><b>Hotel Address</b></Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="Enter Hotel Address"    value={formik.values.HotelAddress}
                            {...formik.getFieldProps("HotelAddress")} />{formik.touched.HotelAddress && formik.errors.HotelAddress ?
                                <span style={{ color: 'red' }}>{formik.errors.HotelAddress}</span> : null}
                    </Form.Group>
                </Row>
                <Row>

                    <Form.Group className="mb-3" controlId="First Name" >
                        <Form.Label><b> FullName</b></Form.Label>
                        <Form.Control type="text" placeholder="Enter FullName"  value={formik.values.FullName}
                            {...formik.getFieldProps("FullName")} />{formik.touched.FullName && formik.errors.FullName ?
                                <span style={{ color: 'red' }}>{formik.errors.FullName}</span> : null}
                    </Form.Group>


                </Row>


                <Form.Group className="mb-3" controlId="Address">
                    <Form.Label><b>Address</b></Form.Label>
                    <Form.Control as="textarea" rows={2}
                        placeholder="Enter Address"  value={formik.values.Address}
                        {...formik.getFieldProps("Address")} />{formik.touched.Address && formik.errors.Address ?
                            <span style={{ color: 'red' }}>{formik.errors.Address}</span> : null}
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="State">
                            <Form.Label><b>State</b></Form.Label>
                            <Form.Control type="text" placeholder=" State"  value={formik.values.State}
                                {...formik.getFieldProps("State")} />{formik.touched.State && formik.errors.State ?
                                    <span style={{ color: 'red' }}>{formik.errors.State}</span> : null}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="City">
                            <Form.Label><b>City</b></Form.Label>
                            <Form.Control type="text" placeholder=" City"  value={formik.values.City}
                                {...formik.getFieldProps("City")} />{formik.touched.City && formik.errors.City ?
                                    <span style={{ color: 'red' }}>{formik.errors.City}</span> : null}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                <Form.Group className="mb-3" controlId="Contact No">
                    <Form.Label><b>Contact No</b></Form.Label>
                    <Form.Control type="numbers" placeholder=" Contact No"  value={formik.values.ContactNo}
                        {...formik.getFieldProps("ContactNo")} />{formik.touched.ContactNo && formik.errors.ContactNo ?
                            <span style={{ color: 'red' }}>{formik.errors.ContactNo}</span> : null}
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="Number of Guests">
                    <Form.Label><b>Number of Guests</b></Form.Label>
                    <Form.Control type="numbers" placeholder=" Number of Guests"  value={formik.values.NoofGuests}
                        {...formik.getFieldProps("NoofGuests")} />{formik.touched.NoofGuests && formik.errors.NoofGuests ?
                            <span style={{ color: 'red' }}>{formik.errors.NoofGuests}</span> : null}
                </Form.Group>
                </Col>
                </Row>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label><b>Email address</b></Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={formik.values.Email}
                        {...formik.getFieldProps("Email")} />{formik.touched.Email && formik.errors.Email ?
                            <span style={{ color: 'red' }}>{formik.errors.Email}</span> : null}

                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Check-in">
                            <Form.Label><b>Check-in</b></Form.Label>
                            <Form.Control type="date"min={disablePastDate()} placeholder=" Check-in"  value={formik.values.check_in} name="check_in"
                                {...formik.getFieldProps("check_in")} />{formik.touched.check_in && formik.errors.check_in ?
                                    <span style={{ color: 'red' }}>{formik.errors.check_in}</span> : null}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="Check-out">
                            <Form.Label><b>Check-out</b></Form.Label>
                            <Form.Control type="date" min={formik.values.check_in} placeholder=" Check-out"  value={formik.values.check_out} name="check_out"
                                {...formik.getFieldProps("check_out")} />{formik.touched.check_out && formik.errors.check_out ?
                                    <span style={{ color: 'red' }}>{formik.errors.check_out}</span> : null}
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="outline-dark" type="submit" id="Book">
                    <b> BOOK NOW</b>
                </Button>

            </Form>
        </Container>

    )
}