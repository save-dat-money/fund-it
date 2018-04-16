package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class FundTest {

	@Test
	public void shouldCreateFundObject() {
		Fund underTest = new Fund();
		assertNotNull(underTest);
	}

	@Test
	public void shouldGetFundName() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency", account, 300);
		String check = underTest.getFundName();
		assertThat(check, is("Emergency"));
	}

	@Test
	public void shouldGetFundByAccountId() {
		Account account = new Account("Savings", 1000);
		// Fund underTest = new Fund("Emergency", account);
		long accountId = account.getId();
		assertThat(accountId, is(0L));
	}

	@Test
	public void shouldChangeFundName() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency", account, 300);

		underTest.fundChangeName("Dog");
		String check = "Dog";

		assertThat(underTest.getFundName(), is(check));

	}

	@Test
	public void checkIfUnderTestWithParamSignatureIsNull() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency", account, 300);

		assertNotNull(underTest);
	}

	@Test
	public void shouldChangeFundAmountDecrease() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency", account, 400);
		account = new Account("Savings", 1000, underTest);

		double before = underTest.getFundAmount();
		double withdraw = 200;
		underTest.decreaseFundAmnt(withdraw);

		double check = before - withdraw;

		assertThat(underTest.getFundAmount(), is(check));
		assertThat(account.getBalance(), is(1000.00));
	}

	@Test
	public void shouldChangeFundAmountIncrease() {
		Account account = new Account("Savings", 1000);
		Fund fund = new Fund("Emergency", account, 400);
		//account = new Account("Savings", 1000, fund);

		double fundAmntBefore = fund.getFundAmount();
		double fundIncr = 200;
		fund.increaseFundAmnt(fundIncr);

		double fundAmntWithIncr = fundAmntBefore + fundIncr;
		account = new Account("Savings", 1000, fund);

		assertThat(fundAmntWithIncr, is(600.00));
		fund = new Fund("Emergency", account); 
		//assertThat(fund.getFundAmount(), is(fundAmntWithIncr));
		assertThat(account.getBalance(), is(1000.00));
	}
	
	@Test
	public void changeFundAmountIncreaseHandlesFundIncreaseAmntMoreThanUnasssignedFund() {
		Account account = new Account("Savings", 1000);
		Fund fund = new Fund("Emergency", account, 900);
		account = new Account("Savings", 1000, fund);

		double fundAmntBefore = fund.getFundAmount();
		double fundAmntIncr = 100;
		fund.increaseFundAmnt(fundAmntIncr);

		double fundAmntWithIncr = fundAmntBefore + fundAmntIncr;
		account = new Account("Savings", 1000, fund);
		
		assertThat(fundAmntWithIncr, is(1000.00));
		assertThat(fund.getFundAmount(), is(fundAmntWithIncr));
		assertThat(account.getUnassignedFundAmount(), is(0.00));
	}
	
	@Test
	public void unassignedFundMethod() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency", account, 400);
		account = new Account("Savings", 1000, underTest);
		double unFundAmnt = account.getUnassignedFundAmount(); 
		assertThat(unFundAmnt, is(600.00));
	}


}
