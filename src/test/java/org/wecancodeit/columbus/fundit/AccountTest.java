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
		Fund fundTest = new Fund("Emergency");
		Account account = new Account(100.00,fundTest);
		
		Collection<Fund> check = account.getFunds(); 
		
		assertThat(check, contains(fundTest));
		
	}
	
	@Test
	public void accountSetFundstoAccount() {
		Fund fundTest = new Fund("Emergency");
		Fund fundTest2 = new Fund("Dog"); 
		Account account = new Account(100.00,fundTest,fundTest2);
				
		Collection<Fund> check = account.getFunds(); 
		
		assertThat(check, containsInAnyOrder(fundTest,fundTest2));
	}
	
	@Test
	public void shouldBeAbleToRemoveFundFromAccount() {
		
		Fund fundTest = new Fund("Emergency");
		Fund fundTest2 = new Fund("Dog"); 
		Account account = new Account(100.00,fundTest,fundTest2);
		
		account.removeFund(fundTest);
		
		Collection<Fund> check = account.getFunds(); 
		
		assertThat(check, contains(not(fundTest))); 
	}
	
	
}
