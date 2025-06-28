package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.SurplusDTO;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import com.PlateShare_BackEnd.PlateShare.service.SurplusService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/surplus")

public class SurplusController {
    private final SurplusService surplusService;

    @Autowired
    public SurplusController(SurplusService surplusService) {
        this.surplusService = surplusService;
    }

    // create surplus
    @PreAuthorize("hasAuthority('DONATEUR')")
    @PostMapping("/create")
    public ResponseEntity<SurplusDTO> createSurplus(@Valid @RequestBody SurplusDTO surplusDTO){
        SurplusDTO createdSurplus = surplusService.createSurplus(surplusDTO);
        return new ResponseEntity<>(createdSurplus, HttpStatus.CREATED) ;
    }

    @PreAuthorize("hasAuthority('DONATEUR')")
    @PutMapping("/update/{id}")
    public Surplus updateSurplus(@PathVariable Long id, @RequestBody Surplus surplus){
        return surplusService.updateSurplus(id,surplus);
    }

    @PreAuthorize("hasAuthority('DONATEUR')")
    @GetMapping("/{id}")
    public SurplusDTO getSurplusById(@PathVariable Long id){
        return surplusService.getSurplusById(id);
    }

    //get all surplus
    @GetMapping
    public List<SurplusDTO> getAllSurplus(){
        return  surplusService.getAllSurplus();
    }
}
