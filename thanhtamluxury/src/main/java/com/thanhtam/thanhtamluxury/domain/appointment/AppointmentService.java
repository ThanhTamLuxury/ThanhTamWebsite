package com.thanhtam.thanhtamluxury.domain.appointment;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AppointmentService {
    List<AppointmentDto> getAll();

    AppointmentDto getById(int id);

    AppointmentDto createAppointment(AppointmentDto appointmentDto);

    void deleteAppointment(int id);
}
