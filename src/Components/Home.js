import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import React, { Component } from 'react'

import "./Home.css"


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

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled:true,
            result:{city:'',state:'',checkin:'',checkout:''},
            citydata:[],
            statedata:[]
        };

        

    }

    


    componentDidMount() {
        fetch("http://localhost:8080/GetState")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        statedata: result
                    });
                }
            );
    }

    changeCity= (e) => {
        this.setState({disabled:false})
       this.setState({ state: e.target.value });
       
        fetch("http://localhost:8080/GetCity/"+ e.target.value)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        citydata: result
                    });
                }
            );

    }

    twoEvent=(e)=>{
        this.changeCity(e);
        this.changeHandler(e);
    }

     changeHandler = e => {
           const name = e.target.name;
           const value = e.target.value;
           this.setState(      
              {
                 result:{
                    ...this.state.result,
                    [name]: value
                  }
            
           });

        }
        

    handleSubmit =(e)=>{
       
         console.log(this.state.result);  
//          e.preventDefault();

        
    }

    


    render() {
        return (
            <div>

                <Container fluid className="bg1">

                    <div className="form1">
                        <div className="heading" >
                            <h1>Welcome to ConfirmMyStay</h1>
                            <h3 style={{ color: 'blue' }}>Feel like home away from home!!</h3>
                        </div>
                        <Card className="card1">
                            <Card.Body>
                                <Form  action="/Hotel" onSubmit={this.handleSubmit}>

                                    <Row>
                                        <Col sm={3} className="fcol">
                                            <b><label for="STATE" class="form-label">STATE:</label></b>
                                            <input list="statelist" class="form-control inputBox" id="STATE" name="state" value={this.state.result.state} autocomplete="off" onChange={this.twoEvent} />
                                            <datalist id="statelist"  >
                                            <option >Select State</option>  
                                                {this.state.statedata.map((e, key) => {
                                                    
                                                    return <option key={key} value={e.state}>{e.state}</option>;
                                                
                                                    
                                                })}
                                            </datalist>
                                        </Col>
                                        <Col sm={3} className="fcol">
                                            <b><label for="TOWN" class="form-label inputBox">TOWN:</label></b>
                                            <input list="citylist" class="form-control inputBox" id="TOWN" name="city" disabled={this.state.disabled} autocomplete="off" value={this.state.result.city} onChange={this.changeHandler} />
                                            <datalist id="citylist" value={this.state.citydata}>
                                             
                                                {this.state.citydata.map((e, key) =>
                                               { return <option key={key} value={e.citycol}>{e.citycol}</option>;   })} 
                                            </datalist>
                                        </Col>
                                        <Col sm={3} className="fcol"> <b><label for="CHECKIN" class="form-label inputBox">CHECK-IN:</label></b>
                                            <input type="date" class="form-control inputBox" id="CHECKIN" name="checkin" min={disablePastDate()} value={this.state.result.checkin} onChange={this.changeHandler}/>

                                        </Col>
                                        <Col sm={3} className="fcol">
                                            <b><label for="CHECKOUT" class="form-label inputBox" name="checkout">CHECK-OUT:</label></b>
                                            <input type="date" class="form-control inputBox" name="checkout" id="CHECKOUT" value={this.state.result.checkout} min={this.state.result.checkin} onChange={this.changeHandler} />
                                        </Col>
                                        <Col className="findhotel"> <Button  type="submit" variant="success" >FIND HOTEL</Button></Col>
                                    </Row>

                                </Form>
                            </Card.Body>
                        </Card>
                    </div>

                </Container>
            </div>
        );
    }
}

