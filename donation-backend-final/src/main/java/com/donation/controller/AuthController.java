package com.donation.controller;

import com.donation.service.AuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signin")
    public Map<String, Object> signIn(@RequestBody Map<String, String> body,
                                      HttpServletResponse response) {
        String email = body.get("email");
        String password = body.get("password");
        String role = body.get("role");
        return authService.signIn(email, password, role, response);
    }

    @PostMapping("/signout")
    public Map<String, Object> signOut(HttpServletResponse response) {
        Cookie cookie = new Cookie("jwt", "");
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return Map.of("message", "Signed out successfully");
    }
}