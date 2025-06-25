package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.AuthResponseDTO;
import com.PlateShare_BackEnd.PlateShare.dto.LoginRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.RegisterDTO;
import com.PlateShare_BackEnd.PlateShare.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(@Valid @RequestBody RegisterDTO registerDTO) {
        return ResponseEntity.ok(authService.register(registerDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequestDTO) {
        return ResponseEntity.ok(authService.login(loginRequestDTO));
    }
}
