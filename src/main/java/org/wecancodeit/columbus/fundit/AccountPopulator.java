package org.wecancodeit.columbus.fundit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class AccountPopulator implements CommandLineRunner {

	@Resource
	AccountRepository accountRepo;

	@Resource
	FundRepository fundRepo;
	
	@Resource 
	UsersRepository usersRepo; 
	
	Role admin = new Role("ADMIN"); 

	@Override
	public void run(String... args) throws Exception {
		Account account = new Account("My Account", 3000);
		accountRepo.save(account);
		
		
		Fund fund = new Fund("Emergency", account, 1000);
		fundRepo.save(fund);
		
		Fund fund2 = new Fund("Car", account, 1000);
		fundRepo.save(fund2);
		
		Users user = new Users("Stefan", "Murakami", "test", "email", admin, account); 
		usersRepo.save(user); 
		
		
		

	}

}
