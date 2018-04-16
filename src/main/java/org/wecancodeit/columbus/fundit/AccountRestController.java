package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
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

	@RequestMapping(path = "/funds/{fundId}", method = RequestMethod.GET)
	public Fund getFund(@PathVariable("fundId") long fundId) {
		Fund displayFund = fundRepo.findOne(fundId);
		return displayFund;
	}

	@RequestMapping(path = "/funds/{fundId}/addMile/{mileMarkerAmount}", method = RequestMethod.POST)
	public Fund addMileMarker(@PathVariable("fundId") long fundId, @PathVariable("mileMarkerAmount") double mileMarkerAmount) {
		Fund addMileMarkerFund = fundRepo.findOne(fundId);
		addMileMarkerFund.mileMarker = mileMarkerAmount;
		fundRepo.save(addMileMarkerFund);
		return addMileMarkerFund;
	}

	@CrossOrigin("*")
	@RequestMapping(path = "/account/{accountId}/funds", method = RequestMethod.GET)
	public Iterable<Fund> getFunds(@PathVariable("accountId") long accountId) {
		return fundRepo.findByAccountId(accountId);
	}


	
	//account edit controller
	@RequestMapping(path = "/edit-account-deposit/account/1", method = RequestMethod.PUT)
	public Account depositAccount(@RequestParam(value = "amountDeposit", required=true) double amountDeposit) {

		Account editAccount = accountRepo.findById(1L);
		editAccount.deposit(amountDeposit);
		accountRepo.save(editAccount);
		return editAccount;
	}

	
	//actual withdraw of account balance
	@RequestMapping(path = "/edit-account-withdraw/account/1", method = RequestMethod.PUT)
	public Account withdrawAccount(@RequestParam(value = "amountWithdraw", required=true) double amountWithdraw) {
		Account editAccount = accountRepo.findById(1L);
		editAccount.withdraw(amountWithdraw);
		accountRepo.save(editAccount);	
		return editAccount; 
	}
	
//	edit-account-withdraw/populate/account/1
	@RequestMapping(path = "/edit-account-withdraw/populate/account/1", method = RequestMethod.GET)
	public Iterable<Fund> withdrawPopulation() {	
		return fundRepo.findAll(); 
	}

	
	
	
	
	


	@RequestMapping(path = "/add-fund/account/{accountId}/{fundName}/{fundAmount}", method = RequestMethod.POST)
	public Fund addFund(@PathVariable("accountId") long accountId, @PathVariable("fundName") String fundName, @PathVariable("fundAmount") double fundAmount) {
		Account newFundAccount = accountRepo.findById(1L);
		double newFundAmount;
		if (newFundAccount.getUnassignedFundAmount() < fundAmount) {
			newFundAmount = newFundAccount.getUnassignedFundAmount();
		} else {
			newFundAmount = fundAmount;
		}
		Fund newFund = new Fund(fundName, newFundAccount, newFundAmount);
		// if(newFundAccount.getUnassignedFundAmount() < fundAmount) {
		// newFund = new Fund(fundName, newFundAccount,
		// newFundAccount.getUnassignedFundAmount());
		// }
		fundRepo.save(newFund);
		return newFund;
	}

	@RequestMapping(path = "/account/{accountId}/fund/{fundId}/remove-fund", method = RequestMethod.POST)
	public Account removeFund(@PathVariable("accountId") long accountId, @PathVariable("fundId") Long fundId) {
		Fund fundToRemove = fundRepo.findOne(fundId);
		Account currentFundAccount = accountRepo.findById(accountId);
		if (fundToRemove != null) {
			currentFundAccount.removeFund(fundToRemove);
			fundRepo.delete(fundToRemove);
		}
		accountRepo.save(currentFundAccount);
		return currentFundAccount;
	}

	@RequestMapping(path = "/increase-fund/account/{accountId}/{fundId}/{fundIncrease}", method = RequestMethod.POST)
	public Fund increaseFund(@PathVariable("accountId") long accountId, @PathVariable("fundId") Long fundId, @PathVariable("fundIncrease") double fundIncrease) {
		Account account = accountRepo.findById(1L);
		Fund fundToIncr = fundRepo.findOne(fundId);
		
		fundToIncr.increaseFundAmnt(fundIncrease);

		fundRepo.save(fundToIncr);
		accountRepo.save(account); 
		return fundToIncr;
	}

}
