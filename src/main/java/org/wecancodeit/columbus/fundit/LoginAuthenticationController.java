package org.wecancodeit.columbus.fundit;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

//@RestController
public class LoginAuthenticationController {

    @Resource
    LoginRepository loginRepo;
    
    @RequestMapping(path = "/login", method = RequestMethod.PUT)
    public Login authenticate(@PathVariable("loginName") long loginId) {
    	String name; 
    	
    	Login checkName = loginRepo.findByName; 
    	
    }



}
