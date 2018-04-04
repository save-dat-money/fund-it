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
		Account account = new Account("Account 1", 1000);
		accountRepo.save(account);
		
		Account account2 = new Account("Account 2", 1000);
		accountRepo.save(account2);
		
		Fund fund = new Fund("Test 1", account);
		fundRepo.save(fund);
		
		Fund fund2 = new Fund("Test 2", account);
		fundRepo.save(fund2);
		
		Fund fund3 = new Fund("Test Fund", account2);
		fundRepo.save(fund3);
	}

}
