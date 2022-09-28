import React from 'react'
import { Container, Row,Col} from 'react-bootstrap'
import "./WhyCFS.css"
export default function WhyDH() {
    return (
        <div>
            <Container fluid className="facilities">
               <a name="Why"><h2>Facilities</h2></a> 
                <Row>
                    <Col sm={4}>
                    <img src={process.env.PUBLIC_URL + '/images/wifi2.jpg'}/>
                    <strong>Free,Faster wi-fi</strong>
                    <p>We make it easy to stay connected with family, friends and colleagues.</p>
                    </Col>
                    <Col sm={4}>
                    <img  src={process.env.PUBLIC_URL + '/images/laundary2.jpeg'}/>
                    <strong>On-site guest laundary</strong>
                    <p>Every hotel has on-site guest laundry... because laundry is the only thing that should be seperated by color.</p>
                    </Col>
                    <Col sm={4}>
                    <img  src={process.env.PUBLIC_URL + '/images/kitchen.jpeg'}/>
                    <strong>Fully equipped kitchens</strong>
                    <p>No reservation are needed with fully equipped kitchens in every suite, complete with stoves, microwaves and refrigerators.</p>
                    </Col>
                </Row>
                <Row>
                <Col sm={4}>
                    <img className="pets" src={process.env.PUBLIC_URL + '/images/pets.jpg'}/>
                    <strong className="pethead">Pets are welcome</strong>
                    <p className="petcontent">Come. Sit. Stay. We know your furry loved ones are like family.So, don't leave Fido or Fluffy behind! </p>
                    
                    </Col>
                    <Col sm={4}>
                    <img  src={process.env.PUBLIC_URL + '/images/Gym2.jpeg'}/>
                    <strong>Fully equipped Gym</strong>
                    <p>Stay Fit, Stay Healty with our fully equipped Gym</p>
                    </Col>

                    <Col sm={4}>
                    <img  src={process.env.PUBLIC_URL + '/images/pexels-juan-salamanca-61129.jpg'}/>
                    <strong> Outdoor Swimming pool</strong>
                    <p>Keep calm and go swim</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
