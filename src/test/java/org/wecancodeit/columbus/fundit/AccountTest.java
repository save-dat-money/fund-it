package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;

import static org.junit.Assert.assertNotNull;


public class AccountTest {
	
	@Test
	public void shouldCreateAnAccountObject() {
		Account account = new Account(); 
		
		assertNotNull(account);
		
	}

}
