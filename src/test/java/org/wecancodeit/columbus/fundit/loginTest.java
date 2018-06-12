package org.wecancodeit.columbus.fundit;

import org.junit.Test;

public class loginTest {

    @Test
    public void shouldCreateALoginObject() {
        Login login = new Login();

        assertNotnull(login);
    }
}
