package org.wecancodeit.columbus.fundit;

import java.util.Arrays;
import java.util.Collection;

public class Account {

	private double balance;
	private Collection<Fund> funds; 
	
	public double getBalance() {
		return balance;
	}

	public Account(double balance) {
		this.balance = balance;

	}

	public Account() {

	}

	public Collection<Fund> getFunds() {
		return funds;
	}

	public void setFunds(Fund...fund) {
		this.funds = Arrays.asList(fund);
	}
	

}
