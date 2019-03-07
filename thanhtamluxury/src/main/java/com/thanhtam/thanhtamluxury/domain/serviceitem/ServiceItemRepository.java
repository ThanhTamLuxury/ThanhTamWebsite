package com.thanhtam.thanhtamluxury.domain.serviceitem;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ServiceItemRepository extends JpaRepository<ServiceItem, Integer> {
	@Query(value = "Select * From ServiceItem si "
				+ "Where si.serviceType = ?1 AND si.isActive = 1 "
				+ "Order by si.id DESC Limit 3", nativeQuery = true)
	List<ServiceItem> getTop3(String serviceType);

	List<ServiceItem> findAllByServiceType(String serviceType, Pageable pageable);

	List<ServiceItem> findAllByServiceType(String serviceType);
}
