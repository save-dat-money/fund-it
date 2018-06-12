package org.wecancodeit.columbus.fundit;

import org.junit.Test;
import static org.junit.Assert.assertNotNull;

public class loginTest {

    @Test
    public void shouldCreateALoginObject() {
        Login login = new Login();

        assertNotNull(login);
    }
}
