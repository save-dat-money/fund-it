package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountRestController {

	@Resource
	FundRepository fundRepo;

	@Resource
	AccountRepository accountRepo;

	@RequestMapping(path = "/accounts", method = RequestMethod.GET)
	public Iterable<Account> findAccounts() {
		return accountRepo.findAll();

	}

	@RequestMapping(path = "/funds", method = RequestMethod.GET)
	public Iterable<Fund> getFunds() {
		return fundRepo.findAll();
	}

	@RequestMapping(path = "/account/{accountId}/funds", method = RequestMethod.GET)
	public Iterable<Fund> getFunds(@PathVariable("accountId") long accountId) {
		return fundRepo.findByAccountId(accountId);
	}


	@RequestMapping(path = "/add-fund/account/{accountId}/{fundName}", method = RequestMethod.POST)
	public Fund addFund(@PathVariable("accountId") long accountId, @PathVariable("fundName") String fundName) {
		Account newFundAccount = accountRepo.findById(1L);
		Fund newFund = new Fund(fundName, newFundAccount);
		fundRepo.save(newFund);
		accountRepo.save(newFundAccount);
		return newFund;
	}

}
