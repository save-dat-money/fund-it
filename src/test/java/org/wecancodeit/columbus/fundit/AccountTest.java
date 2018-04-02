package org.wecancodeit.columbus.fundit;

import org.junit.Test;

public class AccountTest {
	
	@Test
	public void shouldCreateAnAccountObject() {
		Account account = new Account(); 
		
		AssertNotNull(account); 
		
	}

}
