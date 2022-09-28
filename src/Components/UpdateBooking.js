import React, { Component } from 'react'
import { Button, Modal, Row,Col,Form } from 'react-bootstrap'



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


export class UpdateBooking extends Component {
    constructor(props) {
        super(props);
        this.check_in=React.createRef();
        this.check_out=React.createRef();
        this.state = { booking:{},disabled:true,value:'' };
    }

    async componentWillMount() {
        const response = await fetch("http://localhost:8080/crud/search/" + this.props.match.params.id);
        const res = await response.json();
        this.setState({
            booking: res
        });
    }
        

    onUpBook = (e) => {

        this.setState={value:this.check_in.current.value};
        this.setState={value:this.check_out.current.value};
      
        let data={
            "check_in":this.check_in.current.value,
            "check_out":this.check_out.current.value

        };
            let demo =JSON.stringify(data);
         
       console.log(JSON.parse(demo));
       fetch("http://localhost:8080/crud/update/"+this.props.match.params.id,{     method: 'PUT',
              headers:{'Content-type':'application/json'},
                 body: demo
        }).then(r=>{console.log(r.json())})
       
             this.props.history.push("/Employeehome")
            window.location.reload(true)
       

        e.preventDefault();
    }


    render() {

        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Row>
                            <Col sm={6} className="fcol"> <b><label for="CHECKIN" class="form-label inputBox">CHECK-IN:</label></b>
                                            <input type="date" ref={this.check_in} class="form-control inputBox" id="CHECKIN" name="check_in" min={disablePastDate()} defaultValue={this.state.booking.check_in} />

                                        </Col>
                             <Col sm={6} className="fcol">
                                            <b><label for="CHECKOUT" class="form-label inputBox" name="check_out">CHECK-OUT:</label></b>
                                            <input type="date" ref={this.check_out} class="form-control inputBox" name="check_out" id="CHECKOUT" defaultValue={this.state.booking.check_out} min={this.state.booking.check_in}  />
                            </Col>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        
                        <Button type="submit" variant="primary" onClick={this.onUpBook}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </div>
        )
    }
}


