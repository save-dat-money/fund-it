package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.contains;
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
		Account account = new Account(100.00); 
		
		double check = account.getBalance(); 
		
		assertThat(check, is(100.00));	
	}
	
	@Test
	public void accountSetFundToAccount() {
		Account account = new Account(100.00);
		Fund fundTest = new Fund("Emergency");
		
	
		Fund check = account.getFunds(); 
		
		assertThat(check, contains(fundTest));
		
//		assertThat(, contains(fundTest));		
	}
	
	
}
