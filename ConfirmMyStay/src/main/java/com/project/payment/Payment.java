package com.project.payment;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.booking.Booking;
import com.project.customer.Customer;

@Entity
public class Payment {
	
	private long p_id;
	private double p_amt;
	private Date p_date;
	private Booking booking;
	
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	public Payment(long p_id, double p_amt, Date p_date,  Booking booking) {
		super();
		this.p_id = p_id;
		this.p_amt = p_amt;
		this.p_date = p_date;
		
		this.booking = booking;
	}




	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getP_id() {
		return p_id;
	}



	public void setP_id(long p_id) {
		this.p_id = p_id;
	}



	public double getP_amt() {
		return p_amt;
	}



	public void setP_amt(double p_amt) {
		this.p_amt = p_amt;
	}


	@JsonFormat(pattern = "yyyy-MM-dd")
	public Date getP_date() {
		return p_date;
	}



	public void setP_date(Date p_date) {
		this.p_date = p_date;
	}



	@ManyToOne(optional = false)
    @JoinColumn(name="b_id")
	public Booking getBooking() {
		return booking;
	}




	public void setBooking(Booking booking) {
		this.booking = booking;
	}




	@Override
	public String toString() {
		return "Payment [p_id=" + p_id + ", p_amt=" + p_amt + ", p_date=" + p_date + ", booking=" + booking + "]";
	}
	
	
	
	



	



	

	
	
	
	
}
