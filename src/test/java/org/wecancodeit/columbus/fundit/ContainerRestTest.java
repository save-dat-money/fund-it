package org.wecancodeit.columbus.fundit;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ContainerRestTest {
	
	@Resource
	private TestRestTemplate restTemplate; 
	
	@Test
	public void shouldDisplayFunds() {
		ResponseEntity<String> response = restTemplate.getForEntity("/accounts", String.class);
		HttpStatus status = response.getStatusCode(); 
		assertThat(status,is(HttpStatus.OK));
	}
	

}
