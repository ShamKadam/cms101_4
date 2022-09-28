package com.project.employee;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

	  
	 @CrossOrigin("http://localhost:3000") 
	@RestController  
	public class EmpRestController 
	{  
		@Autowired
		EmpManager manager;
	
	@GetMapping("/GetAllEmps")   
	 public String disp(HttpServletRequest request,HttpServletResponse response) 
	{
		 System.out.println("inside disp method");
	      List<Employee> list=manager.getAllEmployees();
	      String json = new Gson().toJson(list);
	       return json;
	 }  
	@PostMapping("/addEmp")
	public void add(@RequestBody Employee e)
	{
		manager.addEmployee(e);
	}
	}  










