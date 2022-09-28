
import React, { Component } from 'react'
import { Table, Form, Row, Col, Card } from 'react-bootstrap'
import "./Hotel.css"

export default class Hotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: []
        };
    }

    changeCity = (e) => {
        console.log(e.target.value);

        fetch("http://localhost:8080/GetHotelByCity/" + e.target.value)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        hotel: result
                    });
                }
            );

    }
    render() {
        const params = new URLSearchParams(window.location.search);
        return (
            <div>


                <div>
                    <br/>
                    <br/>
                    <br/>
                    <Card>
                        <Card.Header><b>Book Your hotel</b></Card.Header>
                        <Card.Body>
                            <Form action="/SelectHotel" onSubmit={this.handleSubmit}>

                                <Row className="f1">
                                <Col sm={6} className="fcol">
                                    <Form.Group className="mb-3" controlId="STATE" >
                                        <Form.Label><b>STATE:</b></Form.Label>
                                        <Form.Control type="text" placeholder="Enter FullName" value={params.get('state')}/>
                                    </Form.Group>
                                 </Col>   
                                 <Col sm={6} className="fcol">
                                    <Form.Group className="mb-3" controlId="CITY" >
                                        <Form.Label><b>CITY:</b></Form.Label>
                                        <Form.Control type="text"  name="city" value={params.get('city')} autoFocus="true" onFocusCapture={this.changeCity} />
                                    </Form.Group>
                                 </Col>  
                                 <br/>
                                </Row>
                                <Row>


                                    <Table striped bordered hover className="htable">
                                        <thead>
                                            <tr>
                                                {/* <th>City</th>
                                                <th>State</th> */}
                                                <th>Hotel_Address</th>
                                                <th>Contact</th>
                                                <th>Cost</th>
                                                <th>Available rooms</th>
                                                {window.sessionStorage.getItem("mydata")?
                                                <th>Book</th>:null}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.hotel.map(h => (
                                                <tr key={h.idhotel}>
                                                    {/* <td>{h.city.citycol}</td>
                                                    <td>{h.city.state.state}</td> */}
                                                    <td>{h.h_address}</td>
                                                    <td>{h.phone}</td>
                                                    <td>{h.cost}</td>
                                                    <td>{h.available_rooms}</td>
                                                    {window.sessionStorage.getItem("mydata")?
                                                    <td><a href={'/Bookingform/'+h.idhotel}>Book</a></td>:null}
                                                </tr>))}
                                        </tbody>
                                    </Table>
                                    
                                </Row>

                            </Form><br/> <br/> 
                        </Card.Body>
                    </Card>

                </div>

            </div>
        )
    }
}


