package com.project.payment;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;




@Transactional
@Repository
public class Payment_Daoimpl implements Payment_Dao {

	@Autowired
	HibernateTemplate template;
	@Override
	public Payment getPayment(int pid) {
		Payment temp=(Payment)template.find("from Payment p where p.id=?",pid);
		return temp;

	}

	@Override
	public void addPayment(@RequestBody Payment Pay) {
		// TODO Auto-generated method stub
		template.save(Pay);
	}

	@Override
	public List<Payment> getAll_Payments() {
		// TODO Auto-generated method stub
		List<Payment> l1=(List<Payment>)template.find("from Payment");

		return l1;
	}

	
	

}
