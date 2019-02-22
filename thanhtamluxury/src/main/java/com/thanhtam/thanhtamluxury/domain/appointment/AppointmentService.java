package com.thanhtam.thanhtamluxury.domain.appointment;

import java.util.List;

public interface AppointmentService {
    List<AppointmentDto> getAll();

    AppointmentDto getById(int id);

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    void deleteAppointment(int id);
}
