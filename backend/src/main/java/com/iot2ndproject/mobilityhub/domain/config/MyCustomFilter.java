package com.iot2ndproject.mobilityhub.domain.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MyCustomFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // 서블릿 실행되기 전에 실행
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        String requestURi = httpServletRequest.getRequestURI();
        System.out.println(">>>>요청 들어감(요청한 URI): " + requestURi);
        long startTime = System.currentTimeMillis();

        // 필터체인에 등록되어 있는 다음 필터가 실행(실행될 필터가 없으면 서블릿이 실행)
        filterChain.doFilter(servletRequest, servletResponse);

        // 응답되면서 실행되는 부분 - 요청처리가 끝나고 클라이언트에게 응답하면서 실해오딜 코드가 있으면 명시
        long endTime = System.currentTimeMillis();
        System.out.println("<<<<<<<<<<<<응답 나감(실행시간: "+ (endTime-startTime)+" ms)");
    }
}
