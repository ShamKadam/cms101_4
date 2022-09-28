import React, { Component } from 'react'
import './payment.css';
import { Modal ,Card} from 'react-bootstrap'
export default class Payment extends Component {
    render() {
        return (
            <div className="padding">

                <div className="deb">


                    <Card border="dark">
                    <b>CREDIT/DEBIT CARD PAYMENT</b>
                    <div><img src="https://img.icons8.com/color/36/000000/visa.png"/> <img src="https://img.icons8.com/color/36/000000/mastercard.png"/> <img src="https://img.icons8.com/color/36/000000/amex.png"/>
                    </div>
                    <br/>
                    <div>
                    <label ><b>CARD HOLDER NAME</b></label> <input type ="text" className='ch'maxLength="25" />
                    <br/><br/>
                    <label><b>CARD NUMBER</b></label> <input  type ="text"className='ch'maxLength="125"  placeholder="•••• •••• •••• ••••" required/>
                    <br/><br/>
                    <label><b>CARD EXPIRY</b></label> <input type ="text"className='ch' maxLength="25" placeholder="•• / ••" required/>
                    <br/><br/>
                    <label><b>CARD CVC</b></label> <input type ="text" className='ch'maxLength="125"  placeholder="••••" required/>
                    <br/>
                    <br/>
                    <div> <br></br> <input value="MAKE PAYMENT" className="but" variant="success" type ="button"/></div>
                    <br/>
                    </div>
                    </Card>


                </div>

            </div>



        )
    }
}
