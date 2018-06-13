package org.wecancodeit.columbus.fundit;

import org.springframework.data.repository.CrudRepository;

public interface LoginRepository extends CrudRepository<Login, Long> {
    Login findById(Long id);

	Login findByUsername(String username);
}
