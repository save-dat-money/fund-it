package org.wecancodeit.columbus.fundit;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AccountController {
	
	@Resource
	FundRepository fundRepo; 
	
	@Resource
	AccountRepository accountRepo; 
	
	@RequestMapping("/account")
	public String getAllFunds(Model model) {
		Fund fund = new Fund("Test"); 
		fundRepo.save(fund); 
		Account account = new Account(1000, fund);
		accountRepo.save(account); 
		model.addAttribute("account", account); 
		model.addAttribute("funds", fundRepo.findAll()); 
		return "homePage"; 
	}

}
