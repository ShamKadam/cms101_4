import React from 'react';

import { Form,Row,Col, Container,Button} from 'react-bootstrap';
import './ContactUs.css';
export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            Comment: ''
        };

    }
    mySubmitHandler = (event) => {
        event.preventDefault();
    }

    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
        < div className="b"> 
        <Container fluid>
        < Form onSubmit={this.mySubmitHandler} >
            <h3><b>CONTACT US</b></h3>
            <Row className="f1">
                                <Col sm={6} className="fcol">
                                    <Form.Group className="mb-3" controlId="FullName" >
                                        <Form.Label><b>FullName</b></Form.Label>
                                        <Form.Control type="text" placeholder="Enter FullName" />
                                    </Form.Group>
                                 </Col>   
                                 <Col sm={6} className="fcol">
                                    <Form.Group className="mb-3" controlId="ContactNo." >
                                        <Form.Label><b>ContactNo.</b></Form.Label>
                                        <Form.Control type="text"  name="ContactNo."  />
                                    </Form.Group>
                                 </Col>  
             </Row>
             <Row>
             <Col sm={12} className="fcol">
                                    <Form.Group className="mb-3" controlId="Email-Id" >
                                        <Form.Label><b>Email-Id</b></Form.Label>
                                        <Form.Control type="text"  name="Email-Id"  />
                                    </Form.Group>
                                 </Col>
             </Row>
             <Row>
             <Col sm={12} className="fcol">
                                    <Form.Group className="mb-3" controlId="Feedback" >
                                        <Form.Label><b>Feedback</b></Form.Label>
                                        <Form.Control as="textarea" row='5' placeholder="Feedback" />
                                    </Form.Group>
                                 </Col>   
             </Row>
            
             <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
             <Button  id="Book" type="submit" value="Submit">Submit</Button>
             </div>
             
        </Form >
        </Container>
        </div>
        );
    }
}


