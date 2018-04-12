package org.wecancodeit.columbus.fundit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fund {
	@Id
	@GeneratedValue
	private long id;
	private String fundName;
	protected double fundAmount;

	@ManyToOne
	public Account account;

	public double getFundAmount() {
		return fundAmount;
	}

	public String getFundName() {
		return fundName;
	}
	
	public Account getAccount() {
		return account;
	}

	public long getId() {
		return id;
	}

	//add-fund AJAX
	public Fund(String fundName, Account account) {
		this.fundName = fundName;
		this.account = account;
		this.fundAmount = 100;
	}

	// AJAX uses only
	public Fund(String fundName) {
		this.fundName = fundName;
	}

	public Fund(String fundName, Account account, double fundAmount) {
		this.fundName = fundName;
		this.account = account;
		this.fundAmount = fundAmount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fundName == null) ? 0 : fundName.hashCode());
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
		Fund other = (Fund) obj;
		if (fundName == null) {
			if (other.fundName != null)
				return false;
		} else if (!fundName.equals(other.fundName))
			return false;
		return true;
	}

	public Fund() {
	}

	@Override
	public String toString() {
		return " " + fundName;
	}

	public void fundChangeName(String fundNameToChange) {
		fundName = fundNameToChange;  
	}

	public void fundAmountChangeDecrease(double fundDecrease) {
		account.balance += fundDecrease;
		fundAmount -= fundDecrease;
	}

	public void fundAmountChangeIncrease(double fundIncrease) {
		account.balance -= fundIncrease;
		fundAmount += fundIncrease; 
	}


}
