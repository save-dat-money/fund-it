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
		
		Fund underTest = new Fund("Emergency");
		
		
		String check = underTest.getFundName();
		
		assertThat(check, is("Emergency"));

		
	}
}
