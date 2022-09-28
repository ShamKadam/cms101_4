package com.project.payment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class Payment_servimpl implements Payment_services {

	@Autowired
	Payment_Dao paymentdao;
	@Override
	public Payment getPayment(int pid) {
		// TODO Auto-generated method stub
		return paymentdao.getPayment(pid);
	}

	@Override
	public void addPayment(Payment pay) {
		// TODO Auto-generated method stub
		paymentdao.addPayment(pay);
	}

	@Override
	public List<Payment> getAll_Payments() {
		return paymentdao.getAll_Payments();
		// TODO Auto-generated method stub
		
	}

}
