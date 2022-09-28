package com.project.booking;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingManagerImpl implements BookingManager
{
	@Autowired
	BookingDAO dao;

	public void addBooking(Booking b) {
		dao.addBooking(b);
		
	}

	public List<Booking> getBooking() {
		// TODO Auto-generated method stub
		return dao.getBooking();
	}

	public void delete(int b_id) {
		// TODO Auto-generated method stub
		dao.delete(b_id);
	}

	public void update(Booking booking,int b_id) {
		// TODO Auto-generated method stub
		dao.update(booking,b_id);
		
	}

	public Booking getBooking(int b_id) {
		// TODO Auto-generated method stub
		return dao.getBooking(b_id);
	}
	
	

}
