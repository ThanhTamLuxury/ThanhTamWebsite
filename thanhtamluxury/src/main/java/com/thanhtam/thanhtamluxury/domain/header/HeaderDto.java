package com.thanhtam.thanhtamluxury.domain.header;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HeaderDto implements Mapper<Header> {
    private int id;
    private String name;
    private String to;
    private Boolean exact;
}
