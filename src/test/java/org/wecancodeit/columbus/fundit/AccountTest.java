package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.contains;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.not;

import java.util.Collection;

import org.junit.Test;


public class AccountTest {
	
	@Test
	public void shouldCreateAnAccountObject() {
		Account account = new Account(); 
		
		assertNotNull(account);
	}
	
	@Test
	public void accountShouldHaveBalance() {
		Account account = new Account(100.00); 
		
		double check = account.getBalance(); 
		
		assertThat(check, is(100.00));	
	}
	
	@Test
	public void accountSetFundToAccount() {
		Account account = new Account(100.00);
		Fund fundTest = new Fund("Emergency");
		
		account.setFunds(fundTest);
		Collection<Fund> check = account.getFunds(); 
		
		assertThat(check, contains(fundTest));
		
	}
	
	@Test
	public void accountSetFundstoAccount() {
		Account account = new Account(100.00);
		Fund fundTest = new Fund("Emergency");
		Fund fundTest2 = new Fund("Dog"); 
		
		account.setFunds(fundTest,fundTest2);
		
		Collection<Fund> check = account.getFunds(); 
		
		assertThat(check, containsInAnyOrder(fundTest,fundTest2));
	}
	
	@Test
	public void shouldBeAbleToRemoveFundFromAccount() {
		
		Fund fundTest = new Fund("Emergency");
		Fund fundTest2 = new Fund("Dog"); 
		Account account = new Account(100.00,fundTest2,fundTest);
//		account.setFunds(fundTest,fundTest2);
		
		account.removeFund(fundTest2);
		
		Collection<Fund> check = account.getFunds(); 
		
		
		assertThat(check, contains(not(fundTest2))); 
		
		
	}
	
	
}
