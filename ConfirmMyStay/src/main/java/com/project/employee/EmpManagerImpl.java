package com.project.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpManagerImpl implements EmpManager
{
    @Autowired
    EmpDAO dao;
	


         @Override
	public List<Employee> getAllEmployees() {
		// TODO Auto-generated method stub
		return dao.getAllEmployees();
	}


	@Override
	public void addEmployee(Employee e)
	{
	dao.addEmployee(e);
	} 

}










