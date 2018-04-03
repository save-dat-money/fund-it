package org.wecancodeit.columbus.fundit;

import org.springframework.data.repository.CrudRepository;

public interface FundRepository extends CrudRepository<Fund, Long> {

	public Fund findByFundNameIgnoreCase(String fundName);
}
