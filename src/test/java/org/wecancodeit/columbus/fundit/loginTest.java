package org.wecancodeit.columbus.fundit;

import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

public class loginTest {


//@Before
//public void setUp() throws Exception {
//    Login login = new Login();
//}
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

    @Test
    public void shouldCheckUserInputWithPassword(){
        Login login = new Login("test","testpass");
        Boolean reply = login.checkPassword("testpass");
        assertThat(reply, is(true));
    }
}
