package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AccountPopulator implements CommandLineRunner {

	@Resource
	AccountRepository accountRepo;

	@Resource
	FundRepository fundRepo;

	@Override
	public void run(String... args) throws Exception {
		Account account = new Account("My Account", 3000);
		accountRepo.save(account);
		
		Fund fund = new Fund("Emergency", account, 1000);
		fundRepo.save(fund);
		
		Fund fund2 = new Fund("Car", account, 1000);
		fundRepo.save(fund2);
		
//		Fund fund3 = new Fund("Test Fund", account2, 400);
//		fundRepo.save(fund3);
//		

	}

}
