package com.project.hotel;

import java.util.List;

public interface HotelManager {
	
		List<Hotel> getAllHotels();
		Hotel getHotel(int id);
		Hotel getHotelByAdd(String hotel);
		List<Hotel> getHotel(String city);
		List<City> getCity();
		List<State> getState();
		List<City> getCitybyState(String state);
}
