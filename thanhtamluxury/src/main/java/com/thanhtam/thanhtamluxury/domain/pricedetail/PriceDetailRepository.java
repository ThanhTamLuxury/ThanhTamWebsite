package com.thanhtam.thanhtamluxury.domain.pricedetail;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.time.LocalDate;

public interface PriceDetailRepository extends JpaRepository<PriceDetail, Integer> {

    @Query(value = "Select pd.price From ServiceItem si Join PriceDetail pd On si.id = pd.serviceItem "
            + "Where si.id = ?1 AND pd.applyDate = ?2")
    Double findCurrentPriceById(Integer id, LocalDate today);
}
