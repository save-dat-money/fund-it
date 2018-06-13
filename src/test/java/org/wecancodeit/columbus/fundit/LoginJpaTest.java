package org.wecancodeit.columbus.fundit;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.is;

import javax.annotation.Resource;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class LoginJpaTest {

    @Resource
    private TestEntityManager entityManager;

    @Resource
    private LoginRepository loginRepo;

    @Test
    public void saveAndLoadLoginWithPassword() {}
    Login loginUnderTest = new Login("test", "testpass");
    loginUnderTest = loginRepo.save(loginUnderTest);
    long loginId = loginUnderTest.getId();

    entityManager.flush();
    entityManager.clear();

    loginUnderTest = loginRepo.findOne(loginId);
    assertThat(loginUnderTest.checkPassword("testpass"), is(true));

}
