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
		Account account = new Account("Account Name Test", 1000);
		accountRepo.save(account);
		Fund fund = new Fund("Test Fund", account);
		fundRepo.save(fund);
	}

}
