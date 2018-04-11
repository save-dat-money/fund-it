package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class AccountTest {

	@Test
	public void shouldCreateAnAccountObject() {
		Account account = new Account();

		assertNotNull(account);
	}

	@Test
	public void accountShouldHaveBalance() {
		Account account = new Account("Savings", 100.00);

		double check = account.getBalance();

		assertThat(check, is(100.00));
	}

	@Test
	public void accountSetFundToAccount() {
		Account account = new Account("Savings", 100.00);
		Fund fundTest = new Fund("Emergency", account);
		Account check = fundTest.getAccount();
		assertThat(check, is(account));

	}

	@Test
	public void accountSetFundstoAccount() {
		Account account = new Account("Savings", 100.00);
		Fund fundTest = new Fund("Emergency", account);
		Fund fundTest2 = new Fund("Dog", account);

		Account check = fundTest.getAccount();
		Account check2 = fundTest2.getAccount();

		assertThat(check, is(account));
		assertThat(check2, is(account));
	}

	@Test
	public void acctBalanceEqualsSumOfFunds() {
		Account account = new Account("Savings", 100.00);
		Fund fund1 = new Fund("Emergency", account);
		Fund fund2 = new Fund("House", account);
		account = new Account("Savings", 100.00, fund1, fund2);

		double fund1Amount = fund1.getFundAmount();
		double fund2Amount = fund2.getFundAmount();

		double accountTotal = account.getFundsTotalAmnt();

		assertThat(accountTotal, is(fund1Amount + fund2Amount));

	}

	@Test
	public void fundsWithDefaultAmountAreEqualToAcctBalance() {
		Account account = new Account("Savings", 200.00);
		Fund fund1 = new Fund("Emergency", account);
		Fund fund2 = new Fund("House", account);
		account = new Account("Savings", 200.00, fund1, fund2);

		double accntBalance = fund1.getAccount().getBalance();

		double accountTotal = account.getFundsTotalAmnt();

		assertThat(accountTotal, is(accntBalance));

	}
	@Test
	public void shouldGetUnassignedFund() {
		Account account = new Account("Savings", 1000);
		Fund fund1 = new Fund("Emergency", account, 500);
		Fund fund2 = new Fund("Dog", account, 500);
		account = new Account("Savings", 1000, fund1, fund2);
		double unassignedFundAmnt = account.getUnassignedFundAmount();
		assertThat(unassignedFundAmnt, is(0.0));
	}
	@Test
	public void shouldGetUnassignedFundAgain() {
		Account account = new Account("Savings", 1000);
		Fund fund1 = new Fund("Emergency", account, 500);
		Fund fund2 = new Fund("Dog", account, 200);
		account = new Account("Savings", 1000, fund1, fund2);
		double unassignedFundAmnt = account.getUnassignedFundAmount();
		assertThat(unassignedFundAmnt, is(300.0));
	}
	@Test
	public void shouldGetUnassignedFundAgainOver() {
		Account account = new Account("Savings", 1000);
		Fund fund1 = new Fund("Emergency", account, 500);
		Fund fund2 = new Fund("Dog", account, 800);
		account = new Account("Savings", 1000, fund1, fund2);
		double unassignedFundAmnt = account.getUnassignedFundAmount();
		assertThat(unassignedFundAmnt, is(-300.0));
	}
}
