package com.thanhtam.thanhtamluxury.domain.pricedetail;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PriceDetailDto implements Mapper<PriceDetail> {
    private Integer id;
    private String title;
    private LocalDate startDate;
    private LocalDate endDate;
    private double price;
    private Integer serviceItemId;
}
