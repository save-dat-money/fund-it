package org.wecancodeit.columbus.fundit;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.not;
import static org.junit.Assert.assertThat;

import java.util.Collection;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class AccountJpaTest {

	@Resource
	private TestEntityManager entityManager;

	@Resource
	private FundRepository fundRepo;

	@Resource
	private AccountRepository accountRepo;

	@Test
	public void shouldSaveAndLoadFundandAccount() {
		Account account = new Account(100.00);
		account = accountRepo.save(account);
		Fund fundUnderTest = new Fund("Test", account);
		fundUnderTest = fundRepo.save(fundUnderTest);
		long fundId = fundUnderTest.getId();

		entityManager.flush();
		entityManager.clear();

		fundUnderTest = fundRepo.findOne(fundId);
		assertThat(fundUnderTest.getFundName(), is("Test"));
	}

	@Test
	public void ShouldCallFundWithinAccountClass() {
		Account account = new Account(100.00);
		account = accountRepo.save(account);
		Fund fundUnderTest = new Fund("Test", account);
		fundUnderTest = fundRepo.save(fundUnderTest);
		long accountId = account.getId();

		entityManager.flush();
		entityManager.clear();

		account = accountRepo.findOne(accountId);
		assertThat(account.getFunds(), contains(fundUnderTest));
	}

	@Test
	public void AccountShouldHaveMultipleFunds() {
		Account account = new Account(100.00);
		account = accountRepo.save(account);
		Fund fund1 = new Fund("Test", account);
		fund1 = fundRepo.save(fund1);
		Fund fund2 = new Fund("Test", account);
		fund2 = fundRepo.save(fund2);
		long accountId = account.getId();

		entityManager.flush();
		entityManager.clear();

		account = accountRepo.findOne(accountId);
		assertThat(account.getFunds(), containsInAnyOrder(fund1, fund2));
	}

	@Test
	public void ShouldFindFundsByAccountId() {
		Account account = new Account(100.00);
		account = accountRepo.save(account);
		Fund fund1 = new Fund("Test", account);
		fund1 = fundRepo.save(fund1);
		Fund fund2 = new Fund("Test", account);
		fund2 = fundRepo.save(fund2);
		long accountId = account.getId();

		entityManager.flush();
		entityManager.clear();

		account = accountRepo.findOne(accountId);
		Collection<Fund> fundsForAccountId = fundRepo.findByAccountId(accountId);
		assertThat(fundsForAccountId, containsInAnyOrder(fund1, fund2));
	}

	@Test
	public void addFundToAccount() {
		Account account = new Account("Savings", 100.00);
		account = accountRepo.save(account);

		Fund fund = new Fund("Emergency", account);
		fund = fundRepo.save(fund);

		entityManager.flush();
		entityManager.clear();

		Collection<Fund> fundsForAccount = fundRepo.findByAccountId(1L);
		assertThat(fundsForAccount, contains(fund));
	}

	@Test
	public void removeFundFromAccount() {
		Account newAccount = new Account("Savings", 100.00);
		newAccount = accountRepo.save(newAccount);

		Long accountId = newAccount.getId();

		Fund fund = new Fund("Emergency", newAccount);
		fund = fundRepo.save(fund);

		Fund fund2 = new Fund("Another One", newAccount);
		fund2 = fundRepo.save(fund2);

		entityManager.flush();
		entityManager.clear();

		newAccount = accountRepo.findById(accountId);

		newAccount.removeFund(fund);
		newAccount.removeFund(fund2);
		assertThat(newAccount.getFunds(), not(containsInAnyOrder(fund, fund2)));

	}

	@Test
	public void incrFundAmnt() {
		Account account = new Account("Savings", 1000);
		account = accountRepo.save(account);
		Fund fund = new Fund("Emergency", account, 900);
		
		double fundAmntIncr = 100;
		fund.increaseFundAmnt(fundAmntIncr);
		fund = fundRepo.save(fund); 
		
		entityManager.flush();
		entityManager.clear();
	
		assertThat(fund.getFundAmount(), is(1000.00));
		//assertThat(account.getUnassignedFundAmount(), is(0.00));

	}

}
