package service;

import java.util.Optional;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import model.CustomerUserDetails;
import model.Users;
import repository.UsersRepository;

public class CustomUserDetailsService implements UserDetailsService {
	//authenticates and provides type of user details
	
	private UsersRepository usersRepository; 
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Users> optionalUsers = usersRepository.findByName(username); 
		
		optionalUsers
				.orElseThrow(()-> new UsernameNotFoundException("Username not found")); 
		

		return optionalUsers
				.map(CustomerUserDetails::new).get();
	}


}
