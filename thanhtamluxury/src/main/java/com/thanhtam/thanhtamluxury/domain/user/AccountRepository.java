package com.thanhtam.thanhtamluxury.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, String> {
	Account findByUsername(String username);
}
