package org.wecancodeit.columbus.fundit;

import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

public class loginTest {

    @Test
    public void shouldCreateALoginObject() {
        Login login = new Login();

        assertNotNull(login);
    }

    @Test
    public void loginShouldHavePassword() {
        Login login = new Login("test","testpass");

        String test = login.getPassword();

        assertThat(test,is("testpass"));
    }
}
