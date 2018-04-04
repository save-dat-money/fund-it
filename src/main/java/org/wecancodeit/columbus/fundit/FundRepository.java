package org.wecancodeit.columbus.fundit;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;

public interface FundRepository extends CrudRepository<Fund, Long> {	
	public Collection<Fund> findByAccountId(long accountId);
}
