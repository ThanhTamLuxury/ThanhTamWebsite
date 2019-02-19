package com.thanhtam.thanhtamluxury.api;

import com.thanhtam.thanhtamluxury.domain.appointment.AppointmentDto;
import com.thanhtam.thanhtamluxury.domain.appointment.AppointmentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/appointment")
public class AppointmentApi {

    private AppointmentService appointmentService;

    @GetMapping("/all")
    public List<AppointmentDto> getAllAppointments() {
        return appointmentService.getAll();
    }

    @GetMapping("/{id}")
    public AppointmentDto getById(@PathVariable int id) {
        return appointmentService.getById(id);
    }

    @PostMapping
    public AppointmentDto createAppointment(@RequestBody AppointmentDto appointmentDto) {
        return appointmentService.createAppointment(appointmentDto);
    }

    @DeleteMapping("/{id}")
    public void deleteAppointment(@PathVariable int id) {
        appointmentService.deleteAppointment(id);
    }

}
