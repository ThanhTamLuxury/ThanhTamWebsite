package com.thanhtam.thanhtamluxury.domain.appointment;


import com.thanhtam.thanhtamluxury.common.Mapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto implements Mapper<Appointment> {

    private int id;
    private String name;
    private String address;
    private String email;
    private String phone;
    private String note;

}
