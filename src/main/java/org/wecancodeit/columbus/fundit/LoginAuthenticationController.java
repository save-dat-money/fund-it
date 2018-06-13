package org.wecancodeit.columbus.fundit;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

//@RestController
public class LoginAuthenticationController {

    @Resource
    LoginRepository loginRepo;
    
    @RequestMapping(path = "/login/{username}/{passwordInput}", method = RequestMethod.PUT)
    public Login authenticate(@PathVariable("username") String username, @PathVariable("passwordInput") String passwordInput) {

    	try {
    	Login checkName = loginRepo.findByUsername(username); 
    	} catch (NullPointerException) {
    	if (checkName == null) {
    		//username not found
    	} 
    	checkName.checkPassword(passwordInput)
    }



}
