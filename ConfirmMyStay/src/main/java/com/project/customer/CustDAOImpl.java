package com.project.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
@Transactional
@Component
public class CustDAOImpl implements CustDAO 
{
@Autowired
HibernateTemplate template;
	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		List<Customer> list=(List<Customer>) template.find("from Customer");
		return list;
	}
	@Override
	public void addCustomer(Customer e)
	{
	template.save(e);
	} 

	
	@Override
	public List<Customer> getCustomerByUserid(String user)
	{
	List<Customer> temp =(List<Customer>)template.find(" from Customer c where c.userid=?",user);
		return temp;
		
	}
	@Override
	public Customer getCus(String user) {
		Customer temp = (Customer) template.find(" from Customer c where c.userid=?", user);
		return temp;
	} 
}

 








