package com.thanhtam.thanhtamluxury.domain.location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LocationRepository extends JpaRepository<Location, Integer> {
	@Query(value = "Select Top 1 * From Location l Order by l.id DESC", nativeQuery = true)
	public Location getTop();
}
