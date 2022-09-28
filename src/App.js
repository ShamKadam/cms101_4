import Navbar from './Components/Navbar.js'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import WhyDH from './Components/WhyDH.js';
import OurSuites from './Components/OurSuites'
import Hotel from './Components/Hotel.js';
import Login from './Components/Login.js';
import ContactUs from './Components/ContactUs.js';
import { Yupbooking } from './Components/Bookingform';
import  { Yupcustomer } from './Components/SignUp.js';
import Employeehome from './Components/Employeehome.js';
import Userprofile from './Components/Userprofile.js'

import { UpdateBooking } from './Components/UpdateBooking.js';
import Bill from './Components/Bill.js'

import Payment from './Components/Payment.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Why">
            <WhyDH />
          </Route>
          <Route path="/OurSuites">
            <OurSuites />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <Yupcustomer />
          </Route>
          <Route path="/ContactUs">
            <ContactUs/>
          </Route>
          <Route path="/Employeehome">
            <Employeehome/>
          </Route>
          <Route path="/Userprofile">
            <Userprofile/>
          </Route>
          
          <Route path="/Hotel">
            <Hotel />
          </Route>
          <Route path="/Bookingform/:id" render={(props) => <Yupbooking {...props} key={props.match.params.id} />}>
            </Route>
            
          
            <Route path="/UpdateBooking/:id" render={(props) => <UpdateBooking {...props} key={props.match.params.id} />}>
            </Route>
            <Route path="/Bill/:id" render={(props) => <Bill {...props} key={props.match.params.id} />}>
            </Route>
            <Route path="/Payment/:id" render={(props) => <Payment {...props} key={props.match.params.id} />}>
            </Route>
            
          
          
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}
export default App;
