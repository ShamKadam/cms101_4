package com.project.customer;

import java.util.List;

public interface CustDAO 
{
	List<Customer> getAllCustomers();
	void addCustomer(Customer e);
	List<Customer> getCustomerByUserid(String user);
	Customer getCus(String user);
	
}
