package com.project.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustManagerImpl implements CustManager
{
    @Autowired
    CustDAO dao;
	


         @Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return dao.getAllCustomers();
	}


	@Override
	public void addCustomer(Customer e)
	{
	dao.addCustomer(e);
	} 

	
	@Override
	public List <Customer> getCustomerByUserid(String user) {
		
		return dao.getCustomerByUserid(user);
	}


	@Override
	public Customer getCus(String user) {
		return dao.getCus(user);
	} 
}










