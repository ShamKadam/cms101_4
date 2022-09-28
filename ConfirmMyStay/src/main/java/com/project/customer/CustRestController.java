package com.project.customer;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

	  
	 @CrossOrigin("http://localhost:3000") 
	@RestController  
	public class CustRestController 
	{  
		@Autowired
		CustManager customer;
		
		 @Autowired
		 private EmailService email;
	
	@GetMapping("/GetAllCus")   
	 public String disp(HttpServletRequest request,HttpServletResponse response) 
	{
		 System.out.println("inside disp method");
	      List<Customer> list=customer.getAllCustomers();
	      String json = new Gson().toJson(list);
	       return json;
	 }  
	
	@GetMapping (value="/GetCustomer/{userid}", headers = "Accept=application/json")
	public Customer getCust(@PathVariable String userid)
	{
		Customer c = customer.getCus(userid);
				return c;
	}
	
	@PostMapping("/addCus")
	public void add(@RequestBody Customer e)
	{
		customer.addCustomer(e);
		//email notification code
	      String subject="Hello sir/mam, Welcome to DESTINY HOMES Thanks for chossing a better Destiny for your Worthy stay"+" "+ e.getCname();
	      String message=""
	          + "<div style='border:1px solid #e2e2e2; padding:20px'>"
	          + "<h1>"
	          + "you have suscessfully registered :"
	          + "<br>"
	          +"USERNAME = "+e.getUserid()
	          +"<br>"
	          +"PASSWORD = "+e.getPassword()
	          + "</n>"
	          + "</h1> "
	          + "</div>";
	      String to=e.getEmail();
	      
	      boolean flag = this.email.sendEmail(subject, message, to);
	      //email notification code end
	}
	
	@GetMapping (value="/getcus/{userid}", headers = "Accept=application/json")
	public List<Customer> getCus(@PathVariable String userid)
	{
		List<Customer> c=customer.getCustomerByUserid(userid);
		return c;
	}
	
	}









