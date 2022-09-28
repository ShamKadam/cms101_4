package com.project.customer;

import java.util.List;

public interface CustManager
{
	List<Customer> getAllCustomers();
	void addCustomer(Customer e);
	List<Customer> getCustomerByUserid(String user);
	Customer getCus(String user);
}
