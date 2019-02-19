package com.thanhtam.thanhtamluxury.config;

import com.thanhtam.thanhtamluxury.domain.appointment.Appointment;
import com.thanhtam.thanhtamluxury.domain.appointment.AppointmentRepository;
import com.thanhtam.thanhtamluxury.domain.user.Account;
import com.thanhtam.thanhtamluxury.domain.user.AccountRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@AllArgsConstructor
@Component
public class AppStartupRunner implements CommandLineRunner {

    private AccountRepository accountRepo;

    private AppointmentRepository appointmentRepo;

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account("admin", "admin");
        accountRepo.save(account);

        Arrays.asList(
                new Appointment(1, "Thanh", "Gia Lai", "thanh@gmail.com", "0123456789", "nothing"),
                new Appointment(2, "Phu", "Binh Duong", "phu@gmail.com", "0123456789", "nothing"),
                new Appointment(3, "Dat", "Binh Chanh", "dat@gmail.com", "0123456789", "nothing"),
                new Appointment(4, "Thuc", "Binh Dinh", "thuc@gmail.com", "0123456789", "nothing")
        ).forEach(appointmentRepo::save);
    }
}
