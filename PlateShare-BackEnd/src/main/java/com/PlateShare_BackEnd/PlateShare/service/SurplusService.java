package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.SurplusDTO;

import java.util.List;

public interface SurplusService {
    SurplusDTO createSurplus(SurplusDTO surplusDTO);
    SurplusDTO getSurplusById(Long id);
    List<SurplusDTO> getAllSurplus();
    void deleteSurplus(Long id);


}
