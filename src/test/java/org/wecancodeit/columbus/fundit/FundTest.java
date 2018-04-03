package org.wecancodeit.columbus.fundit;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;


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
		Fund underTest = new Fund("Emergency", account);
		
		
		String check = underTest.getFundName();
		
		assertThat(check, is("Emergency"));
	}
}
