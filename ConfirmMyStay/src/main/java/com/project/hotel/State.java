package com.project.hotel;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table
public class State implements Serializable {
private  int idstate;
private  String state;

public State() {
	
}
public State(int idstate, String state) {
	super();
	this.idstate = idstate;
	this.state = state;
}

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
public int getIdstate() {
	return idstate;
}

public String getState() {
	return state;
}
public void setIdstate(int idstate) {
	this.idstate = idstate;
}
public void setState(String state) {
	this.state = state;
}




}
