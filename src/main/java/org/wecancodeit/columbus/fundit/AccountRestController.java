package org.wecancodeit.columbus.fundit;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountRestController {
	
	@Resource
	FundRepository fundRepo;
	
	@RequestMapping("/accounts")
	public Collection<Fund> showAllFunds(Long id, Model model) {
		model.addAttribute("allFunds", fundRepo.findAll());
		return (Collection<Fund>) fundRepo.findAll();
	}
	
	@RequestMapping("/account/{id}/addfund/{fundName}")
	public Fund addFundToAccount(@PathVariable Long id, @PathVariable String fundName) {
		Account account = new Account();
		Fund fund = fundRepo.findByFundNameIgnoreCase(fundName);
		
		if (fund == null) {
			fund = new Fund(fundName);
			fundRepo.save(fund);
		}
		String result = account.addFund(fund);
		
		if(result.equals("added")) {
			return fund;
		} else {
			return null;
		}
	}
	
	
}
