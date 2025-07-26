package com.PlateShare_BackEnd.PlateShare.controller;

import com.PlateShare_BackEnd.PlateShare.dto.RequestSurplus;
import com.PlateShare_BackEnd.PlateShare.dto.ResponseSurplusDTO;
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
    public ResponseEntity<ResponseSurplusDTO> createSurplus(@Valid @RequestBody RequestSurplus surplusDTO){
        ResponseSurplusDTO createdSurplus = surplusService.createSurplus(surplusDTO);
        return new ResponseEntity<>(createdSurplus, HttpStatus.CREATED) ;
    }

    @PreAuthorize("hasAuthority('DONATEUR')")
    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseSurplusDTO> updateSurplus(@PathVariable Long id, @Valid @RequestBody ResponseSurplusDTO surplusDTO) {
        ResponseSurplusDTO updatedSurplus = surplusService.updateSurplus(id, surplusDTO);
        return ResponseEntity.ok(updatedSurplus);
    }


    @PreAuthorize("hasAnyAuthority('DONATEUR','DEMANDEUR')")
    @GetMapping("/{id}")
    public ResponseSurplusDTO getSurplusById(@PathVariable Long id){
        return surplusService.getSurplusById(id);
    }

    //get all surplus
    @GetMapping
    public List<ResponseSurplusDTO> getAllSurplus(){
        return  surplusService.getAllSurplus();
    }

    // delete
    @PreAuthorize("hasAuthority('DONATEUR')")
    @DeleteMapping("/delete/{id}")
    public void  deleteSurplus(@PathVariable Long id){
        surplusService.deleteSurplus(id);
    }
}
