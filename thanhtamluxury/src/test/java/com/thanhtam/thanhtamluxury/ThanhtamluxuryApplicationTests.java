package com.thanhtam.thanhtamluxury;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ThanhtamluxuryApplicationTests {

    static {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        System.setProperty("timestamp", String.valueOf(dateFormat.format(new Date())));
    }

    @Test
    public void contextLoads() {

    }

}
