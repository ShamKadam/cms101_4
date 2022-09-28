package com.project.booking;
import java.util.List;
public interface BookingManager{
	
	void addBooking(Booking b);
	List<Booking> getBooking();
	void delete(int b_id);
	void update(Booking booking,int b_id);
Booking getBooking(int b_id);
}
