package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.appointment.AppointmentDto;
import com.thanhtam.thanhtamluxury.domain.appointment.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentApi {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/all")
    public List<AppointmentDto> getAllAppointments() {
        return appointmentService.getAll();
    }

    @GetMapping("/{id}")
    public AppointmentDto getById(@PathVariable Integer id) {
        return appointmentService.getById(id);
    }

    @PostMapping
    public AppointmentDto createAppointment(@RequestBody AppointmentDto appointmentDto) {
        return appointmentService.createAppointment(appointmentDto);
    }

    @PutMapping
    public AppointmentDto updateAppointment(@RequestBody @Valid AppointmentDto appointmentDto){
        return appointmentService.updateAppointment(appointmentDto);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable Integer id) {
        appointmentService.deleteAppointment(id);
    }

}
