package com.mndeveci.spring.boot.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:application.properties")
public class App extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(App.class);
    }
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

   /* @Bean
    public CommandLineRunner demo(final CityRepository cityRepository) {
        return s -> {

            List<City> cities = new ArrayList<>();

            City cityInfo = new City();
            cityInfo.setCityCode(34);
            cityInfo.setName("Istanbul");
            cities.add(cityInfo);

            cityInfo = new City();
            cityInfo.setCityCode(6);
            cityInfo.setName("Ankara");
            cities.add(cityInfo);

            cityInfo = new City();
            cityInfo.setCityCode(35);
            cityInfo.setName("Izmir");
            cities.add(cityInfo);

            cityRepository.save(cities);
        };
    }*/

}
