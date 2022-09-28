import React from 'react'
import { Container,Card } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './OurSuites.css'
export default function OurSuites() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div >
            <Container fluid align="center" id="suites">
                <a name="OurSuites"><h2>Our Suites</h2></a>
                <Carousel responsive={responsive}>
               
                    <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/h3.jpeg'} />
                        <Card.Body>
                            <Card.Title>ConfirmMyStay Pune</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/roo2.jpeg'} />
                        <Card.Body>
                            <Card.Title>ConfirmMyStay Indore</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                    <div><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/room.jpeg'} />
                        <Card.Body>
                            <Card.Title>ConfirmMyStay Panji</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/room3.jpeg'} />
                        <Card.Body>
                            <Card.Title>ConfirmMyStay Chennai</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                    <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/h1.jpeg'} />
                        <Card.Body>
                            <Card.Title>ConfirmMyStay Dehli</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                </Carousel>
            </Container>
        </div>
    );
}
