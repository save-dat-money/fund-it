package org.wecancodeit.columbus.fundit;

import java.util.Collection;

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
	private double balance;

	@JsonIgnore
	@OneToMany(mappedBy = "account")
	private Collection<Fund> funds;

	public double getBalance() {
		return balance;
	}

	public String getAccountName() {
		return accountName;
	}

	public Account(double balance) {
		this.balance = balance;
	}

	public Account(String accountName, double balance) {
		this.accountName = accountName;
		this.balance = balance;
	}

	public Account() {
	}

	public Collection<Fund> getFunds() {
		return funds;
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

}
