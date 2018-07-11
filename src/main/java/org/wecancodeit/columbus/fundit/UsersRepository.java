package org.wecancodeit.columbus.fundit;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface UsersRepository extends CrudRepository<Users, Integer>{

	Optional<Users> findByName(String username);

}
