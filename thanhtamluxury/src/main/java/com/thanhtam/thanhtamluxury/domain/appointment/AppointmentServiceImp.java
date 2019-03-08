package com.thanhtam.thanhtamluxury.domain.appointment;

import com.thanhtam.thanhtamluxury.common.Constant;
import com.thanhtam.thanhtamluxury.common.ThanhTamException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AppointmentServiceImp implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public List<AppointmentDto> getAll() {
        return appointmentRepository.findAll()
                .stream()
                .map(Appointment::toMappedClass)
                .collect(Collectors.toList());
    }

    @Override
    public AppointmentDto getById(Integer id) {
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
    public void deleteAppointment(Integer id) {
        Appointment appointment = appointmentRepository
                .findById(id)
                .orElseThrow(() -> new ThanhTamException(HttpStatus.NOT_FOUND, Constant.APPOINTMENT_ID_NOT_FOUND + id));
        appointmentRepository.delete(appointment);
    }

    @Override
    public AppointmentDto updateAppointment(AppointmentDto appointmentDto) {
       if (appointmentRepository.existsById(appointmentDto.getId())){
           return appointmentRepository.save(appointmentDto.toMappedClass())
                   .toMappedClass();
       }
       else {
           throw new ThanhTamException(HttpStatus.NOT_FOUND, Constant.APPOINTMENT_ID_NOT_FOUND + appointmentDto.getId());
       }
    }
}
