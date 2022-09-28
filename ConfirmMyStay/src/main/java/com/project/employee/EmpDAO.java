package com.project.employee;

import java.util.List;

public interface EmpDAO 
{
	List<Employee> getAllEmployees();
	void addEmployee(Employee e);
}
