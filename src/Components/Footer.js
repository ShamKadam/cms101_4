
import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'
import "./Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div>
        <div className="main-footer">
        <div className="container-fluid">
         <Row>
                     {/*Column1*/} 
                 <Col sm={3}>
                        <h3>Explore</h3>
                            <ul className="list-unstyled" align="center">
                                <li>Home</li>
                                <li>About</li>
                                <li>facilities</li>
                                <li>Careers</li>
                                <li>ContactUS</li>  
                            </ul>
                 </Col>
                   {/*Column2*/}   
                   <Col sm={3}>
                        <h3 >Our Branches</h3>   
                        <ul className="list-unstyled" >
                            <li>Maharashtra:Mumbai,Pune,Nagpur</li>
                            <li>Madhya Pradesh:Indore,Bhopal,Ujjain</li>
                            <li>Tamilnadu : Chennai,Rameshwaram</li>
                            <li>Karnataka:Banglore,Belgaum,Ooty</li>
                            <li>Himachal Pradesh:Shimla</li>
                        </ul>
                    </Col>
                   {/*Column3*/}
                   <Col sm={3} >
                        <h3>Main Branch</h3>
                        <p>
                            Marine Drive , Mumbai, Maharashtra 405577•022 5865 1868
                        </p>
                    </Col>
                {/*Column4*/}
                <Col sm={3}>
                        <a name="ContactUs"></a><h3>Connect With Us</h3>
                        <ul class="follow">
                            <a href="/"><i class="bi bi-instagram"></i></a>
                            <a href="/"><i class="bi bi-twitter"></i></a>
                            <a href="/"><i class="bi bi-facebook"></i></a>
                            <a href="/"><i class="bi bi-youtube"></i></a>
                            <a href="/"><i class="bi bi-linkedin"></i></a>
                        </ul>
                    </Col>
                </Row>
                <div id="footer" class="row">
                <p>© 2022-2023 ConfirmMyStay Properties | All rights reserved.</p>
                </div>     
                </div>
      </div>
   </div>  

        );
    }
}
