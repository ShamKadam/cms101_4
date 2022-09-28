package com.project.hotel;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name="hotel",catalog="project")
public class Hotel implements Serializable {
	
	private int idhotel;
	private String h_address;
	private City city;
	private long phone;
	private int total_rooms;
	private int cost;
	private int available_rooms;
	
	public Hotel() {
		
	}
	public Hotel(int idhotel, String h_address, City city, long phone, int total_rooms, int cost, int available_rooms) {
		super();
		this.idhotel = idhotel;
		this.h_address = h_address;
		this.city = city;
		this.phone = phone;
		this.total_rooms = total_rooms;
		this.cost = cost;
		this.available_rooms = available_rooms;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getIdhotel() {
		return idhotel;
	}
	public String getH_address() {
		return h_address;
	}
	
	@ManyToOne(optional = false)
    @JoinColumn(name="idcity")
	public City getCity() {
		return city;
	}
	public long getPhone() {
		return phone;
	}
	public int getTotal_rooms() {
		return total_rooms;
	}
	public int getCost() {
		return cost;
	}
	public int getAvailable_rooms() {
		return available_rooms;
	}
	public void setIdhotel(int idhotel) {
		this.idhotel = idhotel;
	}
	public void setH_address(String h_address) {
		this.h_address = h_address;
	}
	public void setCity(City city) {
		this.city = city;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public void setTotal_rooms(int total_rooms) {
		this.total_rooms = total_rooms;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public void setAvailable_rooms(int available_rooms) {
		this.available_rooms = available_rooms;
	}

	@Override
	public String toString() {
		return "Hotel [idhotel=" + idhotel + ", h_address=" + h_address + ", city=" + city + ", phone=" + phone
				+ ", total_rooms=" + total_rooms + ", cost=" + cost + ", available_rooms=" + available_rooms + "]";
	}
	
	
	
	
	
	}
