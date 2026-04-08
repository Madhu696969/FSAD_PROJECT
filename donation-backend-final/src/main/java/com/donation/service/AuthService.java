package com.donation.service;

import com.donation.entity.Consumer;
import com.donation.entity.Donor;
import com.donation.repository.ConsumerRepository;
import com.donation.repository.DonorRepository;
import com.donation.util.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    private final DonorRepository donorRepository;
    private final ConsumerRepository consumerRepository;
    private final JwtUtil jwtUtil;

    // Pulled from application.properties
    @Value("${admin.email}")
    private String adminEmail;

    @Value("${admin.password}")
    private String adminPassword;

    public AuthService(DonorRepository donorRepository,
                       ConsumerRepository consumerRepository,
                       JwtUtil jwtUtil) {
        this.donorRepository = donorRepository;
        this.consumerRepository = consumerRepository;
        this.jwtUtil = jwtUtil;
    }

    public Map<String, Object> signIn(String email, String password,
                                      String role, HttpServletResponse response) {

        String normalizedRole = role.toLowerCase();
        String token;
        Map<String, Object> result = new HashMap<>();

        if (normalizedRole.equals("donor")) {
            Donor donor = donorRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Invalid email or password"));
            if (!donor.getPassword().equals(password)) {
                throw new RuntimeException("Invalid email or password");
            }
            token = jwtUtil.generateToken(email, "DONOR", donor.getId());
            result.put("userId", donor.getId());
            result.put("name", donor.getName());
            result.put("email", donor.getEmail());
            result.put("role", "DONOR");

        } else if (normalizedRole.equals("consumer")) {
            Consumer consumer = consumerRepository.findByEmail(email)
                    .orElseThrow(() -> new RuntimeException("Invalid email or password"));
            if (!consumer.getPassword().equals(password)) {
                throw new RuntimeException("Invalid email or password");
            }
            token = jwtUtil.generateToken(email, "CONSUMER", consumer.getId());
            result.put("userId", consumer.getId());
            result.put("name", consumer.getName());
            result.put("email", consumer.getEmail());
            result.put("role", "CONSUMER");

        } else if (normalizedRole.equals("admin")) {
            // ✅ FIX: was missing entirely — admin always hit "Invalid role"
            if (!email.equals(adminEmail) || !password.equals(adminPassword)) {
                throw new RuntimeException("Invalid admin credentials");
            }
            token = jwtUtil.generateToken(email, "ADMIN", 0L);
            result.put("userId", 0L);
            result.put("name", "Admin");
            result.put("email", email);
            result.put("role", "ADMIN");

        } else {
            throw new RuntimeException("Invalid role: " + role);
        }

        Cookie cookie = new Cookie("jwt", token);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(86400);
        response.addCookie(cookie);

        result.put("token", token);
        return result;
    }
}