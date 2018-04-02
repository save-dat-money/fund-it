package org.wecancodeit.columbus.fundit;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

public class FundTest {
	
	@Test
	public void shouldCreateFundObject() {
		Fund underTest = new Fund(); 
		
		assertNotNull(underTest);
		
		
	}
}
