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
	double mileMarker;

	@ManyToOne
	public Account account;

	public double getMileMarker() {
		return mileMarker;
	}

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

	// add-fund AJAX
	public Fund(String fundName, Account account) {
		this.fundName = fundName;
		this.account = account;
	}

	// AJAX uses only
	public Fund(String fundName) {
		this.fundName = fundName;
	}

	public Fund(String fundName, Account account, double fundAmount) {
		this.fundName = fundName;
		this.account = account;
		this.fundAmount = fundAmount;
		this.mileMarker = 0;
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

	public void decreaseFundAmnt(double fundDecrease) {
		if (fundDecrease > fundAmount) {
			return; 
		} else { 
		fundAmount -= fundDecrease;
		// when fundDecrease is greater than fundAmount, the fund has a value of 0
		}
	}

	public void increaseFundAmnt(double fundIncrease) {
		if (fundIncrease < 0) {
			return;
		} else { 
		fundAmount += fundIncrease;
		}
		// if fundIncrease is more than unassignedFundAmount,
		// then give fundAmount the remainder in unassigned fund and have account
		// balance be zero

		// modal box to alert user
		// if there is time, let user take fund cash from another fund.... or something
		// else
	}

}
