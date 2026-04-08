package com.donation.config;

import com.donation.filter.JwtAuthFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth

                // ── Public: no token needed ──────────────────────────────
                .requestMatchers("/auth/signin", "/auth/signout").permitAll()
                .requestMatchers(HttpMethod.POST, "/donor/signup", "/consumer/signup").permitAll()

                // ── Admin only ───────────────────────────────────────────
                .requestMatchers("/admin/**").hasRole("ADMIN")

                // ── Donor only ───────────────────────────────────────────
                .requestMatchers("/donor/**").hasRole("DONOR")

                // ── Consumer only ────────────────────────────────────────
                .requestMatchers("/consumer/**").hasRole("CONSUMER")

                // ── Anything else must be authenticated ──────────────────
                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}