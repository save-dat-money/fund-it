package org.wecancodeit.columbus.fundit;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import junit.framework.Assert;

import javax.annotation.Resource;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class LoginJpaTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private LoginRepository loginRepo;

	@Test
	public void saveAndLoadLoginWithPassword() {
		Login login = new Login("test", "testpass");
		login = loginRepo.save(login);

		long loginId = login.getId();

		entityManager.flush();
		entityManager.clear();

		login = loginRepo.findOne(loginId);
		assertThat(login.checkPassword("testpass"), is(true));
	}

	@Test
    public void findLoginByName() {
		Login login = new Login("test", "testpass");
		login = loginRepo.save(login);

//		String loginName = login.getUsername();?\

		entityManager.flush();
		entityManager.clear();
		
		Login test = loginRepo.findByUsername("test"); 
		assertThat(login.getUsername(), is(test.getUsername()));
    }
	

	@Test //	(expected= NullPointerException.class)
	public void returnsMessageWhenNameNotFound() {
		Login login = new Login("test", "testpass");
		login = loginRepo.save(login);
		Login login2 = new Login("test2", "testpass2");
		login = loginRepo.save(login2);
		
		entityManager.flush();
		entityManager.clear();
		
		Login test = loginRepo.findByUsername("test3"); 
		String response = "ok"; 
		if(test == null) {
			response = "not found"; 
		}
		
		assertThat(response, is("not found")); 
		
	}

}
