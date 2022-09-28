import React, { Component } from 'react'

import { Form,Button,Row,Col,Table, Container,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router';
import _default from 'react-bootstrap/esm/Accordion';
 class Userprofile extends Component {
    constructor(props){
        super(props);
        this.state={
          booking:[],bookingtable:[],customer:[],cus:{}
        };
    
        this.getbooking=this.getbooking.bind(this);
        
      
        
      
    
      }
      componentDidMount(){

        let t=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername ;
      fetch("http://localhost:8080/booking").then(res=>res.json()).then(
        (result)=>{
          this.setState({
            booking:result
          });
        }
      )
      fetch("http://localhost:8080/GetAllCus").then(res=>res.json()).then(
        (result)=>{
          this.setState({
            customer:result
          });
        //    console.log(this.state.customer)
          
        }
      )

      fetch("http://localhost:8080/getcus/"+t)
      .then(res => res.json()).then(
        (result)=>{
          this.setState({
            cus:result
          });
          window.sessionStorage.setItem('userdata', JSON.stringify(this.state.cus));
          window.sessionStorage.getItem('userdata');
        }
      )
      
    }
    
    handle=(e)=>this.setState({bookingId:e.target.value});
      getbooking()
      
      {
        let t=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername ;
        let bt2able=[];
        bt2able.push(<div>
            <hr/>
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
          <th>Cancel</th>
          <th>PayNow</th>
      </tr>
      </thead>
      <tbody>
      {this.state.booking.map(emp=>(
        emp.customer.userid==t?
      <tr key={emp.b_id}>
          <td>{emp.b_id}</td>
          <td>{emp.customer.idcustomer}</td>
          <td>{emp.customer.cname}</td>
          <td>{emp.hotel.city.state.state}</td>
          <td>{emp.hotel.city.citycol}</td>
          <td>{emp.hotel.h_address}</td>
          <td>{emp.check_in}</td>
          <td>{emp.check_out}</td>
          <td><Button onClick={this.onDelete}>Delete</Button></td>
          <td><a href={'/payment/'+emp.b_id}>Pay Now</a></td>
      </tr>:null
      ))}
      </tbody>
               </Table>
           </Row>  
           </Form>
            </div>
    
    
        );
        this.setState({bookingtable:bt2able});
     
        
      }

      onDelete=async(e)=>{
        let t=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername ;
        for(let i=0;i<this.state.booking.length;i++){
          if(this.state.booking[i].customer.userid==t){
            const response =await fetch("http://localhost:8080/crud/delete/"+this.state.booking[i].b_id,{ method:"Delete"});
           
        console.log(await response.json());
       
          }
        }
        this.props.history.push("/")
        window.location.reload(false)
      }

    render() {
        let t=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername ;
        console.log(t);
        return (
          
            <div>
                 

            <Container >
          
              <Form >
                <br/>
                <br/>
                <br/>
                <br/>
              <Card border="dark">
                <Table borderless>
                  <th>Customer Details</th>
                  {this.state.customer.map(emp=>(

                 emp.userid==t?<tr key={emp.idcustomer}>
                     <Row>
                      <td>Customer id:{emp.idcustomer}</td>
                      </Row>
                      <Row>
                      <td>Customer name:{emp.cname}</td>
                      </Row>
                      <Row>
                      <td>Address:{emp.c_address}</td>
                      </Row>
                      <Row>
                      <td>City:{emp.c_city}</td>
                      </Row>
                      <Row>
                                <td> State:{emp.c_state}</td>
                                </Row>
                    
                  </tr>:null
                   )) }
                      
                </Table>
              <Row>
               
                <Col><Button className='w-25' onClick={this.getbooking}> Booking</Button></Col>
               
              </Row>
              <br/>
              </Card>
              <br/>
                <Row>
                  <div>
                    {this.state.bookingtable}
                  </div>
                </Row>
                </Form>
            </Container>

            </div>
        )
    }
}
export default withRouter(Userprofile)