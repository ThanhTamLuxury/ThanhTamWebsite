package com.thanhtam.thanhtamluxury.domain.appointment;


import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto implements Mapper<Appointment> {

    private Integer id;
    private String name;
    private String address;
    private String email;
    private String phone;
    private String note;
    private boolean isNew;

}
