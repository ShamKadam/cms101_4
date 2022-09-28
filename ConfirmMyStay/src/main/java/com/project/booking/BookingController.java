package com.project.booking;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.project.customer.EmailService;

@RestController  
@CrossOrigin("http://localhost:3000")
public class BookingController
{
	@Autowired
	BookingManager manager;
	
	@Autowired
	private EmailService email;
	
	@GetMapping(value = "booking",headers = "Accept=application/json")  
	 public String showBooking()
	 {
		  return new Gson().toJson(manager.getBooking());
	 }
	@GetMapping(value = "crud/search/{b_id}", headers = "Accept=application/json")  
	 public Booking getPro(@PathVariable int b_id)
	 {
		Booking p=manager.getBooking(b_id);
		return p;
	 }
	@DeleteMapping(value = "crud/delete/{b_id}", headers = "Accept=application/json")  
	 public void removepro(@PathVariable int b_id)
	 {
		manager.delete(b_id);
	 }
	@PutMapping(value = "crud/update/{b_id}",headers = "Accept=application/json")  
	 public void updatepro(@RequestBody Booking booking,@PathVariable int b_id)
	 {
		manager.update(booking,b_id);
	 }
	@PostMapping(value = "crud/add", headers = "Accept=application/json")  
	 public void addpro(@RequestBody Booking booking)
	 {
		System.out.println("addpro called");
		manager.addBooking(booking);
		
		//email notification code
	      String subject="Hello sir/mam, Welcome to DESTINY HOMES Thanks for chossing a better Destiny for your Worthy stay"+" "+ booking.getCustomer().getCname();
	      String message=""
	          + "<div style='border:1px solid #e2e2e2; padding:20px'>"
	          + "<h1>"
	          + "you have suscessfully Booked  :"
	          + "<br>"
          +"NAME: "+booking.getCustomer().getCname()
	          +"<br>"
	          +"BOOKING ID: "+booking.getB_id()
	          +"<br>"
	          +"HOTEL: "+booking.getHotel().getH_address()
	          +"<br>"
	          +"CHECK IN DATE: "+booking.getCheck_in()
	          +"<br>"
	          +"CHECK OUT DATE: "+booking.getCheck_out()
	          + "</n>"
	          + "</h1> "
	          + "</div>";
	      String to=booking.getCustomer().getEmail();
	      
	      boolean flag = this.email.sendEmail(subject, message, to);
	      //email notification code end
	 }
}
