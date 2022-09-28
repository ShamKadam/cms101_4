package com.project.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.booking.Booking;
@Service
public class HotelManagerImpl implements HotelManager {

	@Autowired
	HotelDAO hdao;
	@Override
	public List<Hotel> getAllHotels() {
		return hdao.getAllHotels();
	}

	@Override
	public Hotel getHotel(int id) {
		return hdao.getHotel(id);
	}
	
	@Override
	public Hotel getHotelByAdd(String hotel) {
		return hdao.getHotelByAdd(hotel);
	}
	
	
	@Override
	public List<Hotel> getHotel(String city) {
		return hdao.getHotel(city);
	}

	@Override
	public List<City> getCity(){
		return hdao.getCity();
	}
	
	@Override
	public List<State> getState(){
		return hdao.getState();
	}
	@Override
	public List<City> getCitybyState(String state) {
		// TODO Auto-generated method stub
		return  hdao.getCitybyState(state);
	}
}
