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
	
	@Resource
	RoleRepository roleRepo; 

	@Override
	public void run(String... args) throws Exception {
		Role admin = new Role("ADMIN"); 
		roleRepo.save(admin); 
		
		Account account = new Account("My Account", 3000);
		accountRepo.save(account);
		
		
		Fund fund = new Fund("Emergency", account, 1000);
		fundRepo.save(fund);
		
		Fund fund2 = new Fund("Car", account, 1000);
		fundRepo.save(fund2);
		
		Users testUser = new Users("Stefan", "Murakami", "test", "email", admin, account); 
		usersRepo.save(testUser); 
		
	}

}
