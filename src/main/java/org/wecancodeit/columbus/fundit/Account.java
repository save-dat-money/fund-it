package org.wecancodeit.columbus.fundit;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Account {
	@Id
	@GeneratedValue
	private long id;
	private double balance;

	@OneToMany(mappedBy = "account")
	private Collection<Fund> funds;

	public double getBalance() {
		return balance;
	}

	public Account(double balance) {
		this.balance = balance;

	}

	public Account(double balance, Fund... funds) {
		this.balance = balance;
		this.funds = new ArrayList<Fund>(Arrays.asList(funds));
	}

	public Account() {

	}

	public Collection<Fund> getFunds() {
		return funds;
	}

	// possibly for later use
	// public void setFunds(Fund...fund) {
	// funds = Arrays.asList(fund);
	// }

	public void removeFund(Fund fund) {
		funds.remove(fund);
	}

	public String addFund(Fund fund) {
		if (!(funds.contains(fund))) {
			funds.add(fund);
			return "added";
		} else {
			return "duplicate";
		}
	}

}
