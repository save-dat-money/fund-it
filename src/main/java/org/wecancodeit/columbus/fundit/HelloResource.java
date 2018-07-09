package org.wecancodeit.columbus.fundit;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/rest/hello")
@RestController
public class HelloResource {
//this controller is used for testing the postgres only 
	
	@GetMapping("/all")
	public String hello() {
		return "Hello All!"; 
	}
	
	@PreAuthorize("hasAnyRol('ADMIN')")
	@GetMapping("/secured/all")
	public String securedHello() {
	    return "Secured Hello"; 
	}

	
	
}
