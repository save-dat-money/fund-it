package org.wecancodeit.columbus.fundit;

import static java.util.Arrays.asList;

import java.util.Collection;
import java.util.HashSet;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Account {
	@Id
	@GeneratedValue
	private long id;
	private String accountName;
	protected double balance;

	@JsonIgnore
	@OneToMany(mappedBy = "account")
	private Collection<Fund> funds;
	protected double unassignedFund;

	public long getId() {
		return id;
	}

	public double getBalance() {
		return balance;
	}

	public String getAccountName() {
		return accountName;
	}

	public Collection<Fund> getFunds() {
		return funds;
	}

	//For Spring
	public Account() {
	}

	public Account(double balance) {
		this.balance = balance;
	}

	public Account(String accountName, double balance) {
		this.accountName = accountName;
		this.balance = balance;
	}

	public Account(String accountName, double balance, Fund... funds) {
		this.accountName = accountName;
		this.balance = balance;
		this.funds = new HashSet<>(asList(funds));
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Account other = (Account) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public void removeFund(Fund fund) {
		funds.remove(fund);
	}

	public double getFundsTotalAmnt() {
		double totalAmnt = 0;
		
		for (Fund fund : funds) {
			
			totalAmnt += fund.getFundAmount();
		}
		return totalAmnt;
	}

	public double getUnassignedFundAmount() {
		double unassignedFund = 0.0;
		if (this.balance >= this.getFundsTotalAmnt()) {
			unassignedFund = balance - getFundsTotalAmnt();
		} else {
			unassignedFund = -1*(getFundsTotalAmnt() - balance);
		}
		return unassignedFund;
	}

	public void deposit(double balanceDeposit) {
		if(balanceDeposit < 0) {
			return;
		} else {
			balance += balanceDeposit;
		}	
	}

	public void withdraw(double balanceWithdraw) {
		if (balanceWithdraw > balance) {
			return; 
		} else {
			balance -= balanceWithdraw;
		}
	}

}
