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

		Fund fund = new Fund("Test");
		fundRepo.save(fund);
		Account account = new Account(1000, fund);
		accountRepo.save(account);
	}

}
