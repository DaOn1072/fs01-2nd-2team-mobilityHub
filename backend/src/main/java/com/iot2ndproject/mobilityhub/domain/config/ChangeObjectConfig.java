package com.iot2ndproject.mobilityhub.domain.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChangeObjectConfig {
    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }
}
