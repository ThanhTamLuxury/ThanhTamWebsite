package com.thanhtam.thanhtamluxury.domain.pricedetail;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceDetailDto implements Mapper<PriceDetail> {
    private int id;
    private LocalDate applyDate;
    private double price;
}
