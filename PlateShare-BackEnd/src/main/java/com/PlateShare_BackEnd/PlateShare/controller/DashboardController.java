package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.DashboardStatsDTO;
import com.PlateShare_BackEnd.PlateShare.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping("/donateur")
    @PreAuthorize("hasAuthority('DONATEUR')")
    public ResponseEntity<DashboardStatsDTO> getDonateurStats(){
        return ResponseEntity.ok(dashboardService.getDonateurDashboard());
    }

    @GetMapping("/demandeur")
    @PreAuthorize("hasAuthority('DEMANDEUR')")
    public ResponseEntity<DashboardStatsDTO> getDemandeurStats(){
        return ResponseEntity.ok(dashboardService.getDemandeurDashbaord());
    }
}
