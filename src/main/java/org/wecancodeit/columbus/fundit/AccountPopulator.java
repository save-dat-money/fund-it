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
		Account account = new Account("Account 1", 500);
		accountRepo.save(account);
		
		Account account2 = new Account("Account 2", 1000);
		accountRepo.save(account2);
		
		Fund fund = new Fund("Test 1", account, 200);
		fundRepo.save(fund);
		
		Fund fund2 = new Fund("Test 2", account, 300);
		fundRepo.save(fund2);
		
		Fund fund3 = new Fund("Test Fund", account2, 400);
		fundRepo.save(fund3);

	}

}
