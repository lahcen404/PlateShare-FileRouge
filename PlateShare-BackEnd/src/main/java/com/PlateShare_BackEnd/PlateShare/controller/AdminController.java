package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.service.AdminService;
import com.PlateShare_BackEnd.PlateShare.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/users")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AdminUserViewDTO>> getAllUsers(){
        return ResponseEntity.ok(adminService.getAllUsers());
    }
}
