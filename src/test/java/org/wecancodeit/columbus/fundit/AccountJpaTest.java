package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.junit.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

public class AccountJpaTest {
	
	@Resource
	private TestEntityManager entityManger; 
	
	@Resource
	private FundRepository fundRepo; 
	
	@Test
	public void shouldFindItemByFundDescription() {
		Fund fund = new Fund("Test"); 
		fundRepo.save(fund); 
		Account account = new Account(100.00,fund); 
		
		
	}


}
