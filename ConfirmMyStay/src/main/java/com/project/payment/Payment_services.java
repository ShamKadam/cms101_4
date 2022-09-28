package com.project.payment;

import java.util.List;


public interface Payment_services {
	public Payment getPayment(int p_id);
	public void addPayment(Payment pay);
	public List<Payment> getAll_Payments();
}
