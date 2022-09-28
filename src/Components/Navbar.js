import React, { Component } from 'react'
import { Nav, Container, NavDropdown ,Navbar} from 'react-bootstrap'
import{withRouter} from 'react-router-dom'
import './Navbar.css'
 class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
      }
    logOut(){
        window.sessionStorage.clear();
        this.props.history.push("/"); 
    }
    render() {
       
        
        let customer=JSON.parse(window.sessionStorage.getItem("mydata"));
        let employee=JSON.parse(window.sessionStorage.getItem("mydata"));
        console.log(customer);
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">ConfirmMyStay</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About</Nav.Link>  
                                <Nav.Link href="/Why">Why ConfirmMyStay</Nav.Link>
                                <Nav.Link href="/OurSuites">Our Suites</Nav.Link>
                                <Nav.Link href="/ContactUs">ContactUS</Nav.Link>  
                            </Nav>
                            <Nav >{
                                window.sessionStorage.getItem("mydata")?null
                                :
                                <>
                                <Nav.Link href="/Login">Login</Nav.Link>
                                <Nav.Link href="/SignUp">SignUp</Nav.Link>
                                </>
                             }
                            </Nav>

                            <Nav>
                            {window.sessionStorage.getItem("mydata")?
                                <NavDropdown title={(customer&&customer.CustUsername)||(employee&&employee.EmpUsername)}>
                                {customer&&customer.CustUsername? <NavDropdown.Item href="/Userprofile" >MyProfile</NavDropdown.Item>:null   }
                                {employee&&employee.EmpUsername? <NavDropdown.Item href="/EmployeeHome" >EmployeeHome</NavDropdown.Item>:null   }
                                 <NavDropdown.Item onClick={this.logOut} >Logout</NavDropdown.Item>
                                </NavDropdown >:
                              null
                               
        }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default withRouter(Navbar1);