package com.thanhtam.thanhtamluxury.domain.location;

import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationDto implements Mapper<Location> {
    private Integer id;
    private String address;
    private String phone;
    private String email;
    private String googleLocation;
}
