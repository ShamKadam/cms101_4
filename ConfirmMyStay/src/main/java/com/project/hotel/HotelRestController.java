package com.project.hotel;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.project.booking.Booking;
@CrossOrigin("http://localhost:3000")
@RestController
public class HotelRestController {
@Autowired
HotelManager manager;

@GetMapping("/GetAllHotels")
public String disp(HttpServletRequest request,HttpServletResponse response) 
	{
		 System.out.println("inside disp method");
	      List<Hotel> list= manager.getAllHotels();
	      String json = new Gson().toJson(list);
	       return json;
	 }  

@GetMapping("/GetState")
public String disp1(HttpServletRequest request,HttpServletResponse response) 
	{
		 System.out.println("inside disp method");
	      List<State> list= manager.getState();
	      String json = new Gson().toJson(list);
	       return json;
	 }  

@GetMapping("/GetCity")
public String disp2(HttpServletRequest request,HttpServletResponse response) 
	{
		 System.out.println("inside disp method");
	      List<City> list= manager.getCity();
	      String json = new Gson().toJson(list);
	       return json;
	 }  

@GetMapping(value = "/GetHotel/{hid}", headers = "Accept=application/json")  
public Hotel getH(@PathVariable int hid)
{
	Hotel h=manager.getHotel(hid);
	return h;
}

@GetMapping(value = "/GetHotelByAdd/{hotel}", headers = "Accept=application/json")  
public int getH2(@PathVariable String hotel)
{
	Hotel h= manager.getHotelByAdd(hotel);
	int x = h.getIdhotel();
	return x;
}

@GetMapping(value = "/GetHotelByCity/{city}", headers = "Accept=application/json")  
public List<Hotel> getH(@PathVariable String city)
{
	List<Hotel> h= manager.getHotel(city);
	
	return h;
}

@GetMapping(value = "/GetCity/{state}", headers = "Accept=application/json")  
public List<City> getC(@PathVariable String state)
{
	List<City> p= manager.getCitybyState(state);
	String json = new Gson().toJson(p);
	return p;
}

}
