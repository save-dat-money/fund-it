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
		Account account = new Account(100.00); 
		Fund fund = new Fund("Test", account); 
		fundRepo.save(fund); 	
	}
}
