package org.wecancodeit.columbus.fundit;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@Controller
public class LoginAuthenticationController {

	@Resource
	LoginRepository loginRepo;

	
	@RequestMapping(value = "Login")
	public String getAllReviews(Model model, Model model1) {
		return "Login";
	}
	
//	@RequestMapping(path = "/login/{username}/{passwordInput}", method = RequestMethod.PUT)
//	public boolean authenticate(@PathVariable("username") String username,
//			@PathVariable("passwordInput") String passwordInput) {
//
//		Login checkName = loginRepo.findByUsername(username);
//		if (checkName != null) {
//			checkName.checkPassword(passwordInput);
//			return true; 
//		}
//		
//		return false; 
//	}

}
