package com.thanhtam.thanhtamluxury.domain.appointment;

import java.util.List;

public interface AppointmentService {
    List<AppointmentDto> getAll();

    AppointmentDto getById(Integer id);

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    void deleteAppointment(Integer id);

    AppointmentDto updateAppointment(AppointmentDto appointmentDto);
}
