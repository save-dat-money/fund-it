package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AccountController {
	
	@Resource
	FundRepository fundRepo; 
	
	@Resource
	AccountRepository accountRepo; 
	
	
	//May be used in later iterations
//	@RequestMapping("/accounts")
//	public String showAllAccounts(Long id, Model model) {
//		model.addAttribute("accounts", accountRepo.findAll());
//		return "accounts";
//	}
	
	@RequestMapping("/account/{accountId}")
	public String getAllFundsFromThisAccount(@PathVariable Long accountId, Model model) {
		model.addAttribute("account", accountRepo.findOne(accountId)); 
		return "account"; 
	}
	
//	//to see every single funds that exist within all accounts
//	//TODO need to create this template
//	@RequestMapping("/funds")
//	public String showAllFunds(Long id, Model model) {
//		model.addAttribute("allFunds", fundRepo.findAll());
//		return "funds";
//	}

}
