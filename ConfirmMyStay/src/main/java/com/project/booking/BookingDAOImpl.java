package com.project.booking;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class BookingDAOImpl implements BookingDAO
{
	@Autowired
	HibernateTemplate template;

	public List<Booking> getBooking()
	{
		List<Booking>mylist=(List<Booking>) template.find("from Booking b");
		return mylist;
	}
	public void delete(int b_id)
	{
		template.delete(template.get(Booking.class, b_id));
	}
	public void update(Booking booking,int b_id)
	{
	template.bulkUpdate("update Booking b set b.check_in=?,b.check_out=? where b.id=?",booking.getCheck_in(),booking.getCheck_out(),b_id);
     template.update(template.get(Booking.class, b_id));
	}
	
	public Booking getBooking(int b_id)
	{
		Booking temp=(Booking)template.find("from Booking b where b.id=?",b_id).get(0);
		return temp;
	}
	public void addBooking(Booking b) {
		template.save(b);
		
	}
}
