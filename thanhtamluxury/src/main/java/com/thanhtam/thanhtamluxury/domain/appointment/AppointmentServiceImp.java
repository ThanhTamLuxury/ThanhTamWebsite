package com.thanhtam.thanhtamluxury.domain.appointment;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AppointmentServiceImp implements AppointmentService {

    private AppointmentRepository appointmentRepository;

    @Override
    public List<AppointmentDto> getAll() {
        return appointmentRepository.findAll()
                .stream()
                .map(Appointment::toMappedClass)
                .collect(Collectors.toList());
    }

    @Override
    public AppointmentDto getById(int id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.APPOINTMENT_ID_NOT_FOUND + id))
                .toMappedClass();
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto appointmentDto) {
        return appointmentRepository
                .save(appointmentDto.toMappedClass())
                .toMappedClass();
    }

    @Override
    public void deleteAppointment(int id) {
        Appointment appointment = appointmentRepository
                .findById(id)
                .orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.APPOINTMENT_ID_NOT_FOUND + id));
        appointmentRepository.delete(appointment);
    }
}
