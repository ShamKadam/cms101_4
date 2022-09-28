import React from 'react'
import {  Row, Container } from 'react-bootstrap'
import "./About.css"

export default function About() {
    return (
        <div>
            <Container fluid className="Intro">
                <Row>
                    
                <a name="About"><h2>About Us</h2></a>
                    <div align="center"><img className="logo" src={process.env.PUBLIC_URL + '/images/bg7.jpg' } /></div>


                </Row>
                <Row >
                    <Container className="introcontent">
                        <p >  ConfirmMyStay is a hospitality company that goes
                             beyond the basics to make emotional connections with our guests. 
                             We have specially designed suite for our guests to make every second of their stay memorable.
                            </p>
                        <p >  Our big apartment-style suites allow you to work, dine and relax, giving you room for everything from conversation to careful thinking. And because loyalty isn't a program, but our way of life is, if you stay longer, you save more.</p>
                         <p>Also do not worry for your beloved pets we understands this beautiful bond they are always welcome!!!</p>
                        <p >  Join our Extended Perks free loyalty program for weekly hotel deals and instant rewards.
                            As a hotel company with a heartbeat, it's our pleasure to always stand behind our promise.
                            We don't just say we're committed to providing a safe, healthy and comfortable stay--we prove it with our complete and thorough STAY confident program. By going above and beyond to keep costs grounded and experiences made higher, we create an experience that extends both value and the kindness of people.</p>
                    </Container>


                </Row>
            </Container>

        </div>
    )
}
