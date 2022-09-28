package com.project.hotel;

import java.util.List;

public interface HotelDAO {
	List<Hotel> getAllHotels();
	Hotel getHotelByAdd(String hotel);
	List<Hotel> getHotel(String city);
	List<City> getCity();
	List<State> getState();
	List<City> getCitybyState(String state);
	Hotel getHotel(int id);
}
