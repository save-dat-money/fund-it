package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;import org.hamcrest.core.IsNot;
import org.hamcrest.core.IsNull;
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
		Fund underTest = new Fund("Emergency", account,300);
		String check = underTest.getFundName();
		assertThat(check, is("Emergency"));
	}
	
	@Test
	public void shouldGetFundByAccountId() {
		Account account = new Account("Savings", 1000);
		//Fund underTest = new Fund("Emergency", account);
		long accountId = account.getId(); 
		assertThat(accountId, is(0L));
	}
	
	@Test
	public void shouldChangeFundName() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency",account,300);
		
		underTest.fundChangeName("Dog");
		String check = "Dog";
		
		assertThat(underTest.getFundName(), is(check));

	}
	
	@Test
	public void checkIfUnderTestWithParamSignatureIsNull() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency",account, 300);
		
		assertNotNull(underTest);
	}

	@Test
	public void shouldChangeFundAmountDecrease() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency",account,400);
		
		double before = underTest.getFundAmount();
		double withdraw = 200;
		underTest.fundAmountChangeDecrease(withdraw);
		
		double check = before - withdraw;
		
		assertThat(underTest.getFundAmount(), is(check));
		assertThat(account.getBalance(), is(1200.00));
	}
	
	@Test
	public void shouldChangeFundAmountIncrease() {
		Account account = new Account("Savings", 1000);
		Fund underTest = new Fund("Emergency",account,400);
		
		double before = underTest.getFundAmount();
		double deposit = 200;
		underTest.fundAmountChangeIncrease(deposit);
		
		double check = before + deposit;
		 
		
		assertThat(underTest.getFundAmount(), is(check));
		assertThat(account.getBalance(), is(800.00));
	}
	
	
	
	
}
