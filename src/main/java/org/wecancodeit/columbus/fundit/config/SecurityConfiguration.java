package org.wecancodeit.columbus.fundit.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import customUserDetails.CustomerUserDetailsService;
import repository.UsersRepository;

@EnableGlobalMethodSecurity(prePostEnabled = true) //enables preauthentication. By role in our case
@EnableWebSecurity
@EnableJpaRepositories(basePackageClasses = UsersRepository.class)
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomerUserDetailsService userDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// auth.inMemoryAuthentication()
		// // auth.authenticationProvider(authenticationProvider) when using usernames
		// and
		// // passwords from a database?
		// .withUser("user").password("test").roles("ADMIN");

		auth.userDetailsService(userDetailsService).passwordEncoder(getPasswordEncoder());

	}

	// implements http security
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// allow all, for testing db
		// httpSecurity
		// .authorizeRequests()
		// .anyRequest()
		// .permitAll().and().httpBasic();
		// httpSecurity.csrf().disable();

		// authenticate first with using the above configure method

		http.csrf().disable();
		http.authorizeRequests().antMatchers("**/secured/**").authenticated() // any url containing "/secured/"
				.anyRequest().permitAll().and().formLogin().permitAll();

	}
	
	private PasswordEncoder getPasswordEncoder() {
		return new PasswordEncoder() {
			@Override
			public String encode(CharSequence charSequence) {
				return charSequence.toString();
			}

			@Override
			public boolean matches(CharSequence rawPassword, String encodedPassword) {
				// TODO Auto-generated method stub
				return false;
			}
		};
	}

}
