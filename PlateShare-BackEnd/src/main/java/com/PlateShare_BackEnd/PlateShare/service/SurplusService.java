package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.SurplusDTO;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;

import java.util.List;

public interface SurplusService {
    SurplusDTO createSurplus(SurplusDTO surplusDTO);
    SurplusDTO updateSurplus(Long id, SurplusDTO surplusDTO);
    SurplusDTO getSurplusById(Long id);
    List<SurplusDTO> getAllSurplus();
    void deleteSurplus(Long id);


}
