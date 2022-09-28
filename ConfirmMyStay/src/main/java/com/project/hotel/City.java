package com.project.hotel;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table
public class City implements Serializable{
private int idcity ;
private String citycol;
private State state;

public City() {
	
}
public City(int idcity, String citycol, State state) {
	super();
	this.idcity = idcity;
	this.citycol = citycol;
	this.state = state;
}

@Id
@GeneratedValue(strategy =GenerationType.IDENTITY)
public int getIdcity() {
	return idcity;
}
public String getCitycol() {
	return citycol;
}

@ManyToOne
@JoinColumn(name="idstate")
public State getState() {
	return state;
}
public void setIdcity(int idcity) {
	this.idcity = idcity;
}
public void setCitycol(String citycol) {
	this.citycol = citycol;
}


public void setState(State state) {
	this.state = state;
}
@Override
public String toString() {
	return "City [idcity=" + idcity + ", citycol=" + citycol + ", state=" + state + "]";
}




}
