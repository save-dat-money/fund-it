package org.wecancodeit.columbus.fundit;

import java.util.Collections;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountRestController {

	@Resource
	FundRepository fundRepo;

	@Resource
	AccountRepository accountRepo;

	@RequestMapping(path = "", method = RequestMethod.GET)
	public Iterable<Account> findAccounts() {
		return accountRepo.findAll(); 
	}

}
