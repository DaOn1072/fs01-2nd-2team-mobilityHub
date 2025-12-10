package com.iot2ndproject.mobilityhub.domain.config;

import jakarta.servlet.*;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MyLogFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {


        System.out.println("**********************************************************************************");

        filterChain.doFilter(servletRequest, servletResponse);

        System.out.println("====================================================================================");
    }
}
