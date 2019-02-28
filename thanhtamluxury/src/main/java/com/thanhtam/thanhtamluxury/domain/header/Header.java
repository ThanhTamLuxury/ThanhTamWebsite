package com.thanhtam.thanhtamluxury.domain.header;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Header implements Mapper<HeaderDto> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String to;
    private Boolean exact;
}
