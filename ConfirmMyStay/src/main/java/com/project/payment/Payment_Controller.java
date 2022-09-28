package com.project.payment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.booking.Booking;



@RestController
@CrossOrigin("http://localhost:3000")
public class Payment_Controller {
	@Autowired
	Payment_services pdao;
	
	@GetMapping("/GetAllPayments")
	public List<Payment> getAllPayment()
	{
		return pdao.getAll_Payments();
		
	}
	
	@PostMapping(value = "crud/addpay", headers = "Accept=application/json")  
	 public void addpro(@RequestBody Payment pay)
	 {
		System.out.println("addpro called");
		pdao.addPayment(pay);
		
	 }
	
	@GetMapping("/GetPayment")
	public Payment getPayment(int pid)
	{
		return pdao.getPayment(pid);
	
	}
	

}
