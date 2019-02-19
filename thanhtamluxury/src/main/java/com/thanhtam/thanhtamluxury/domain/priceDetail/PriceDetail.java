package com.thanhtam.thanhtamluxury.domain.priceDetail;

import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.serviceItem.ServiceItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PriceDetail implements Mapper<PriceDetailDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private LocalDate applyDate;
    private double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceItemId")
    private ServiceItem serviceItem;
}
