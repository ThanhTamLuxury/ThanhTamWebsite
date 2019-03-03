package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ServiceItemRepository extends JpaRepository<ServiceItem, Integer> {
	@Query(value = "Select * From ServiceItem si "
				+ "Where si.serviceType = ?1 AND si.isActive = 1 "
				+ "Order by si.id DESC Limit 3", nativeQuery = true)
	public List<ServiceItem> getTop3(String serviceType);
}
