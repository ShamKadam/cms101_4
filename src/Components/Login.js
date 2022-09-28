
import  'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import  './Login.css';
class Login extends Component {

constructor(props){
        super(props);
        
        // Here we initialize our components state
        this.state = {

            showEmpForm: false,
            showCustForm: true,
            employees:[],
            customers:[],
            employee:{
            EmpUsername:'',
            EmpPassword:'',
            HotelId:'', 
            },
            customer:{
                CustUsername:'',
                CustPassword:''
            },
            cus:{}
          
        };
    
        this.onClick = this.onClick.bind(this);
        this.onCustClick = this.onCustClick.bind(this);
        this.Emptoken=this.Emptoken.bind(this);
        this.Custtoken=this.Custtoken.bind(this);
        //this.EmpCreate=this.EmpCreate.bind(this);

    }
    componentDidMount(){
       fetch("http://localhost:8080/GetAllEmps").then(res=>res.json()).then((result)=>{ this.setState({
                     employees: result
                      });
           //console.log(result[0].userid) 
          
            })

            fetch("http://localhost:8080/GetAllCus").then(res=>res.json()).then((result)=>{ this.setState({
                         customers:result
                    
                          });
               //console.log(result[0].userid)
                
               
                }) 

               
                
    }
    
    onClick () {
        // On click we change our state – this will trigger our `render` method
        this.setState({ showEmpForm: true });
        this.setState({ showCustForm: false });
        
    }

    onCustClick (){
        this.setState({ showEmpForm: false });
        this.setState({ showCustForm: true });
    }
    
      Emptoken(e){ 
        //console.log(e.target.value);
        const name = e.target.name;
//console.log(name);
           const value = e.target.value;
      //  console.log(value);
           this.setState(      
              {
                 employee:{
                    ...this.state.employee,
                    [name]: value
                  }
            
           });
             
    }
    onCreateEmployee=(e)=>{
       
        let data = this.state.employee
          for(let i=0;i<=this.state.employees.length;i++)
        {
let empdb=this.state.employees[i].userid;
let empin=this.state.employee.EmpUsername;
let empdb1=this.state.employees[i].password;
let empin1=this.state.employee.EmpPassword;
let empdb2=this.state.employees[i].idhotel;
let empin2=this.state.employee.HotelId;
            if(((empdb===empin)&&(empdb2==empin2))&&(empdb1===empin1))
            {
                window.sessionStorage.setItem("mydata", JSON.stringify(data));
                window.sessionStorage.getItem("mydata"); 
                fetch("http://localhost:8080/getcus/"+JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername)
                .then(res => res.json()).then(
                  (result)=>{
                    this.setState({
                      cus:result
                    });
                    window.sessionStorage.setItem('userdata', JSON.stringify(this.state.cus));
                    window.sessionStorage.getItem('userdata');
                  }
                )
             
                this.props.history.push("/Employeehome"); 
                break;
                
            }
           else{
           
            if(i==this.state.employees.length-1)     {
                alert("Incorrect Userid or Password")
            }    
            
           }
        }
             
        
         }

       
       
    

    
    renderEmpForm () {
   
        return (
            <div>
                <section>
                <form  className="cf" >
 
                    < h3><center>Employee</center></h3>
                   
                    <div className="modal-form-group">
               <input type="text" className="form-control" placeholder="Username or Email" name="EmpUsername" value={this.state.employee.EmpUsername} onChange={this.Emptoken}required />
                    </div>
                    <div className="modal-form-group">
                        <input type="password" className="form-control" placeholder="Password" name="EmpPassword" value={this.state.employee.EmpPassword} onChange={this.Emptoken} required/>
                    </div>
                    <div className="modal-form-group">
                        <input type="text" className="form-control" placeholder="HotelId" name="HotelId" value={this.state.employee.HotelId} onChange={this.Emptoken}  required />
                    </div>
                   
                    <div className="modal-form-group">
                        <div className="custom-control custom-checkbox">
                         <input type="checkbox" className="custom-control-input" id="customCheck1" />
                         <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            <a href="/" className="forgot-link">Forgot Password</a>
                        </div>
                    </div>

                    <button type="submit" variant="primary" className="btn"onClick={this.onCreateEmployee}>Login</button>
                  
                  
                    </form>
                    </section>
           </div>
          
        );
     }

    render() {

        const { showEmpForm } = this.state;
        const { showCustForm } = this.state;
        return (
           
            <div>
                <div className="bg2"> 
                <div className="logbg" style={{display:"block"}}>
                <ul className="tab-group">
                    <li><a onClick={ this.onCustClick } href="#Cust">Customer</a></li>
                    <li><a onClick={ this.onClick } href="#Emp">Employee</a></li>
                    {showCustForm && this.renderCustForm()}
                    {showEmpForm && this.renderEmpForm()}
                </ul>
                </div>
                
                    
                </div>
                
            </div>
            
            
        )

    }
    
    Custtoken(e){ 
        //console.log(e.target.value);
        const name = e.target.name;
//console.log(name);
           const value = e.target.value;
      //  console.log(value);
           this.setState(      
              {
                 customer:{
                    ...this.state.customer,
                    [name]: value
                  }
            
           });
             
    }
    onCreateCustomer=(e)=>{
        let data=this.state.customer;
          for(let i=0;i<=this.state.customers.length;i++)
        {
let custdb=this.state.customers[i].userid;
let custin=this.state.customer.CustUsername;
let custdb1=this.state.customers[i].password;
let custin1=this.state.customer.CustPassword;
            if((custdb==custin)&&(custdb1==custin1))
            {  
                window.sessionStorage.setItem("mydata", JSON.stringify(data));
                window.sessionStorage.getItem("mydata");  
                let t=JSON.parse(window.sessionStorage.getItem('mydata')).CustUsername ;
                console.log((custdb==custin)&&(custdb1==custin1));
                this.props.history.push("/Userprofile"); 
                
                break;

            }
            else{
                    if(i==this.state.customers.length-1)     {
                        alert("Incorrect Userid or Password")
                    }       
            }
            
        }    
          
         }
    renderCustForm(){
        return(
            <div>
                <section>
                <form className="cf" >
                
                   <h3><center>Login </center></h3>

                    <div className="modal-form-group">
                        <input type="text" className="form-control" placeholder="Username or Email" name="CustUsername"value={this.state.customer.CustUsername} onChange={this.Custtoken}/>
                    </div>

                    <div className="modal-form-group">
                        <input type="password" className="form-control" placeholder="Password" name="CustPassword" value={this.state.customer.CustPassword} onChange={this.Custtoken}/>
                    </div>

                    <div className="modal-form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            <a href="/" className="forgot-link">Forgot Password</a>
                        </div>
                    </div>

                    <button type="submit" variant="primary" className="btn" onClick={this.onCreateCustomer}>Login</button>
                    <a href="/SignUp" style={{paddingLeft:'200px'}}>Sign Up</a>
                   
                    </form>
                    </section>
            </div>
            
        )
    }
}
export default withRouter(Login)
