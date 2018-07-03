package org.wecancodeit.columbus.fundit.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import repository.UsersRepository;

@EnableWebSecurity
@EnableJpaRepositories(basePackageClasses = UsersRepository.class)
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication()
//				// auth.authenticationProvider(authenticationProvider) when using usernames and
//				// passwords from a database?
//				.withUser("user").password("test").roles("ADMIN");
		@Autowired
		private UserDetailsService userDetailsService; 
		
		auth.userDetailsService(userDetailsService)
	}

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

    	//allow all, for testing db
//    	httpSecurity
//    		.authorizeRequests()
//    		.anyRequest()
//    		.permitAll().and().httpBasic();
//    	httpSecurity.csrf().disable(); 
    	
		 //authenticate first with using the above configure method
		httpSecurity
				.authorizeRequests()
				.anyRequest()
				.fullyAuthenticated()
				.and().httpBasic();
		httpSecurity.csrf().disable();
    }

}

