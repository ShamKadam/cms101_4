package com.project.payment;

import java.util.List;


public interface Payment_Dao {
	public Payment getPayment(int pid);
	public void addPayment(Payment pay);
	public List<Payment> getAll_Payments();
}
