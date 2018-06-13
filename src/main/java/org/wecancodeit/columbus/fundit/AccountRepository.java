package org.wecancodeit.columbus.fundit;

import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long>{
	Account findById(Long id);

}
