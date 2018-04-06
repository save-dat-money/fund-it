package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

	@RequestMapping(path = "/addFund", method = RequestMethod.POST)
	public Fund addFund(@RequestBody NewFundRequest newFundRequest) {
		// Validation here (account must exist, etc.)
		Account newFundAccount = accountRepo.findById((long) newFundRequest.accountId);
		Fund newFund = new Fund(newFundRequest.fundName, newFundAccount, newFundRequest.fundAmount);
		fundRepo.save(newFund);
		return newFund;
	}
}
