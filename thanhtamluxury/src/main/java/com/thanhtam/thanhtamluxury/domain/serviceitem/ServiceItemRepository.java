package com.thanhtam.thanhtamluxury.domain.serviceitem;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ServiceItemRepository extends JpaRepository<ServiceItem, Integer> {
	@Query(value = "Select Top 3 * From ServiceItem si "
				+ "Where si.serviceType = ?1 "
				+ "Order by si.id DESC", nativeQuery = true)
	public List<ServiceItem> getTopForMenu(String serviceType);
}
