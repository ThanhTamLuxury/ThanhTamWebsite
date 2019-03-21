package com.thanhtam.thanhtamluxury.domain.pricedetail;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.thanhtam.thanhtamluxury.common.Mapper;
import com.thanhtam.thanhtamluxury.domain.serviceitem.ServiceItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PriceDetail implements Mapper<PriceDetailDto> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private LocalDate startDate;
    private LocalDate endDate;
    private double price;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "serviceItemId")
    @JsonBackReference
    private ServiceItem serviceItem;
}
