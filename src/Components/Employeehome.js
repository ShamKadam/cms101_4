
import React, { Component } from 'react';
import { Form, Button, Row, Col, Table, Container,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployeeHome.css';


export default class Employeehome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      booking: [], bookingtable: [], bookingbyId: [], bookingIdData: [], bookingId: ''
    };

    this.getbooking = this.getbooking.bind(this);
    this.getallbooking = this.getallbooking.bind(this);



  }
  componentDidMount() {
    fetch("http://localhost:8080/booking").then(res => res.json()).then(
      (result) => {
        this.setState({
          booking: result
        });
      }
    )
  }

  handle = (e) => this.setState({ bookingId: e.target.value });
  getbooking() {

    let bt2able = [];
    bt2able.push(<div>
      <hr />
      <Form>
        <Row>
          <h2>Booking Details</h2>
          <Table striped bordered hover>

            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Customer Id</th>
                <th>customer name</th>
                <th>hotel state</th>
                <th>hotel city</th>
                <th>hotel address</th>
                <th>check-in</th>
                <th>check-out</th>
              </tr>
            </thead>
            <tbody>
              {this.state.booking.map(emp => (
                emp.b_id == this.state.bookingId ? <tr key={this.state.bookingId}>
                  <td>{emp.b_id}</td>
                  <td>{emp.customer.idcustomer}</td>
                  <td>{emp.customer.cname}</td>
                  <td>{emp.hotel.city.state.state}</td>
                  <td>{emp.hotel.city.citycol}</td>
                  <td>{emp.hotel.h_address}</td>
                  <td>{emp.check_in}</td>
                  <td>{emp.check_out}</td>
                </tr> : null
              ))}
            </tbody>
          </Table>
        </Row>
      </Form>
    </div>


    );
    this.setState({ bookingtable: bt2able });


  }

  getallbooking() {
    let t=JSON.parse(window.sessionStorage.getItem('mydata')).HotelId ;


    let bt2able = [];
    bt2able.push(<div>
      <hr />
      <Form>
        <Row>
          <h2>Booking Details</h2>
          <Table striped bordered hover>

            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Customer Id</th>
                <th>customer name</th>
                <th>hotel state</th>
                <th>hotel city</th>
                <th>hotel address</th>
                <th>check-in</th>
                <th>check-out</th>
                <th>Update</th>
                <th>Bill</th>
                
              </tr>
            </thead>
            <tbody>
              {this.state.booking.map(emp => (
                emp.hotel.idhotel==t?
                <tr key={emp.b_id}>
                  <td>{emp.b_id}</td>
                  <td>{emp.customer.idcustomer}</td>
                  <td>{emp.customer.cname}</td>
                  <td>{emp.hotel.city.state.state}</td>
                  <td>{emp.hotel.city.citycol}</td>
                  <td>{emp.hotel.h_address}</td>
                  <td>{emp.check_in}</td>
                  <td>{emp.check_out}</td>
                 
                  <td><a href={'/UpdateBooking/'+emp.b_id}>update</a></td>
                  <td><a href={'/Bill/'+emp.b_id}>Bill</a></td>
                  
                </tr>:null
              ))}
            </tbody>
          </Table>
        </Row>
      </Form>
    </div>


    );
    this.setState({ bookingtable: bt2able });


  }


  

  render() {
    return (
      <div>
        <Container fluid className="empbg">
          
          <Form className="f">
            <br/>
            <br/>
            <br/>
            <Card border="dark"  className="c1">
              <Card.Body>
            <Row>
              <Col sm={2}>

              </Col>
              <Col sm={4}>
                <Form.Group className="a2">
                
                  <Form.Label><b>Booking ID</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Booking ID" value={this.state.bookingId} onChange={this.handle} />
                </Form.Group>
              </Col>
            
              <Col className="bcol" sm={2}>
                <Button onClick={this.getbooking} className="w-25  ,a3" style={{ display: 'flex', justifyContent: 'left' }} >Find</Button>
              </Col>
              <Col className="bcol" sm={4}>
                <Button style={{ display: 'flex', justifyContent: 'left' }} className="w-25  ,a1" onClick={this.getallbooking} >All Bookings</Button>
              </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            </Card.Body>
            </Card>
            
            <br/>
            <br/>

            <Row>
              <div>{this.state.bookingtable}</div>
            </Row>

          </Form>
        </Container>
      </div>
    )
  }
}




