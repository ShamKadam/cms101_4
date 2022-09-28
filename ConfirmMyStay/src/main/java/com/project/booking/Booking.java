package com.project.booking;


import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.customer.Customer;
import com.project.hotel.Hotel;



@Entity
public class Booking {

	private int b_id;
	private Hotel hotel;
	private Date check_in,check_out;
	private Customer customer;
	
	
	
	
	public Booking(int b_id, Hotel hotel, Date check_in, Date check_out, Customer customer) {
		super();
		this.b_id = b_id;
		this.hotel = hotel;
	
		this.check_in = check_in;
		this.check_out = check_out;
		this.customer = customer;
	}
	public Booking() {
		
	}
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getB_id() {
		return b_id;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}
   

	
	@JsonFormat(pattern = "yyyy-MM-dd")
	public Date getCheck_in() {
		return check_in;
	}

	public void setCheck_in(Date check_in) {
		this.check_in = check_in;
	}
	@JsonFormat(pattern = "yyyy-MM-dd")
	public Date getCheck_out() {
		return check_out;
	}

	public void setCheck_out(Date check_out) {
		this.check_out = check_out;
	}
	@ManyToOne(optional = false)
    @JoinColumn(name="idhotel")
	public Hotel getHotel() {
		return hotel;
	}
	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}
	
	@ManyToOne()
    @JoinColumn(name="idcustomer")
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	
	@Override
	public String toString() {
		return "Booking [b_id=" + b_id + ", hotel=" + hotel + ", check_in=" + check_in + ", check_out=" + check_out
				+ ", customer=" + customer + "]";
	}
	



	
	
}

