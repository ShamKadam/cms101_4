import React, { Component } from 'react';
import { Form, Button, Container, Row, Col ,Card} from "react-bootstrap";

import './allform.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
    

export default class Bill extends Component {
    
   
    constructor(props) {
        super(props);
        this.state = { booking: [] ,value:''};
        this.p_amt=React.createRef();
        this.p_date=React.createRef();
    }




     componentDidMount() {
         fetch("http://localhost:8080/crud/search/" + this.props.match.params.id)
         .then(res=>res.json()).then((result)=>{ this.setState({
                     booking: result
                      });
           
         });
        
     }


    onGenerate =(e)=>{
        this.setState={value:this.p_amt.current.value};
        this.setState={value:this.p_date.current.value};
        let data = {"booking":{"b_id":this.props.match.params.id,"customer":{
            "email":this.state.booking.customer.email
        }},"p_amt":this.p_amt.current.value,"p_date":this.p_date.current.value}
        let demo =JSON.stringify(data);
            console.log(JSON.parse(demo));
          fetch("http://localhost:8080/crud/addpay",{
        method: 'POST',
        headers:{'Content-type':'application/json'},
          body: demo}
          )
          this.props.history.push("/Employeehome")
            window.location.reload(true)
        }
    
    render() {
        return (
            <div>
                {console.log(this.state.booking)}
                <disablePastDate/>
                 <Container  align="center">
                     <br/>
                     <br/>
                <Card>
                 <Card.Header>Bill</Card.Header>  
                 <Card.Body>
                <Form >
                    <Row>
                        
                    <Col>
                <Form.Group className="mb-3" controlId="Booking Id" >
                    <Form.Label><b>Booking Id</b></Form.Label>
                    <Form.Control type="numbers" placeholder=" Booking Id" defaultValue={this.state.booking.b_id} />
                </Form.Group>
                </Col>
                
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="Payment amount" >
                            <Form.Label><b>Payment amount</b></Form.Label>
                            <Form.Control type="text" ref={this.p_amt} placeholder="Enter Payment amount" />
                        </Form.Group></Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="payment date">
                            <Form.Label><b>Payment date</b></Form.Label>
                            <Form.Control type="date" ref={this.p_date} min={disablePastDate()} placeholder="Enter payment date" defaultValue=""/>
                        </Form.Group></Col>
                </Row>

                <Row> 
                  <br/>
                  <br/>
               </Row>
                  <Button variant="outline-dark" type="submit" onClick={this.onGenerate} id="Book">
                        <b>Generate Bill</b>
                    </Button>
                    <br/>
                </Form>
               </Card.Body>
                </Card>
                <br/>
                </Container>
            </div>
        )
    }
}
