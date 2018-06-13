package org.wecancodeit.columbus.fundit;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

import static org.hamcrest.CoreMatchers.is;
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
}
