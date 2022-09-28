import React, { Component } from 'react'
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

export default class SelectHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { city:'', state:'', hotel: '', hotelid: '' },
            hoteldata:[]

        };

       
    }

   


    changeCity= (e) => {
        console.log(e.target.value);
       
        fetch("http://localhost:8080/GetHotelByCity/"+ e.target.value)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        hoteldata: result
                    });
                }
            );

    }


     changeHandler = e => {
           const name = e.target.name;
           const value = e.target.value;
           this.setState(      
              {
                 data:{
                    ...this.state.data,
                    [name]: value
                  }
            
           });

        }
        twoEvent=(e)=>{
            this.changeCity(e);
            this.changeHandler(e);
        }

    render() {
        const params = new URLSearchParams(window.location.search);
        

        return (
            <div>
                <Container fluid className="bg">

                    <div className="form1">
                        
                        <Card className="card1">
                            <Card.Body>
                                <Form action="/SelectHotel" onSubmit={this.handleSubmit}>

                                    <Row>
                                        <Col sm={2} className="fcol">
                                            <b><label for="STATE" class="form-label">STATE:</label></b>
                                            <input type="text" id="STATE" name="state" value={params.get('state')} onChange={this.changeHandler} />
                                            
                                        </Col>
                                        <Col sm={2} className="fcol">
                                            <b><label for="City" class="form-label">City:</label></b>
                                            <input type="text" id="City" name="city" value={params.get('city')} autoFocus="true" onFocusCapture={this.changeCity} />
                                            
                                        </Col>


                                        <Col sm={3} className="fcol">
                                            <b><label for="Hotel" class="form-label inputBox">Hotel:</label></b>
                                            <input list="hotellist" class="form-control inputBox" id="Hotel" name="hotel" value={this.state.data.hotel} autocomplete="off"  onClick={this.changeHandler} />
                                            <datalist id="hotellist" value={this.state.hoteldata}>
    
                                                {this.state.hoteldata.map((e, key) => { return <option key={key} value={e.h_address}>{e.h_address}</option>; })}
                                            </datalist>
                                        </Col>

                                        <Col sm={3} className="fcol">
                                            <b><label for="Hotelid" class="form-label">City:</label></b>
                                            <input type="text" id="City" name="city" value={params.get('city')} autoFocus="true" onFocusCapture={this.changeCity} />
                                            
                                        </Col>
                                        
                                        <Col className="findhotel"> <Button type="submit" variant="success" >FIND HOTEL</Button></Col>
                                    </Row>

                                </Form>
                            </Card.Body>
                        </Card>
                    </div>

                </Container>
            </div>
        )
    }
}
