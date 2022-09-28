package com.project.hotel;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.project.booking.Booking;

@Repository
public class HotelDAOImpl implements HotelDAO {
@Autowired
HibernateTemplate template;
	
	@Override
	public List<Hotel> getAllHotels()
	{
		List<Hotel>mylist=(List<Hotel>) template.find("from Hotel h");
		return mylist;
	}

	@Override
	public List<Hotel> getHotel(String city) {
		List<Hotel> temp=(List<Hotel>)template.find("from Hotel h where h.city.citycol=?",city);
		return temp;
	}
	
	@Override
	public Hotel getHotel(int id) {
		Hotel temp=(Hotel)template.find("from Hotel h where idhotel=?",id).get(0);
		return temp;
	}
	@Override
	public Hotel getHotelByAdd(String hotel) {
		Hotel temp =(Hotel)template.find("select h.idhotel from Hotel h where h.h_address=?",hotel);
		return temp;
		}
	
	
	@Override
	public List<City> getCity(){
		List<City>mylist=(List<City>) template.find("from City c");
		return mylist;
	}
	
	@Override
	public List<State> getState(){
		List<State>mylist=(List<State>) template.find("from State s");
		return mylist;
	}
	
	@Override
	public List <City> getCitybyState(String state)
	{
		List<City> temp=(List<City>)template.find("from City c where c.state.state=?",state);
		return temp;
	}

}
