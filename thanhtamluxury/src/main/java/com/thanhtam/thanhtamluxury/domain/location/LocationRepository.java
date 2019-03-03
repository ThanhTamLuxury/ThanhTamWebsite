package com.thanhtam.thanhtamluxury.domain.location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	@Query(value = "Select * From location l Order by l.id DESC Limit 1", nativeQuery = true)
	public Location getTop();
}
