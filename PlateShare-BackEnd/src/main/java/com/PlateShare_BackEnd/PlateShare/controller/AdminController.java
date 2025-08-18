package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/users/{id}")
    public void deleteUser(@PathVariable Long id){
        adminService.deleteUser(id);
    }

}
