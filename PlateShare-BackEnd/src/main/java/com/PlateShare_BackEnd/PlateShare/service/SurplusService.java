package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.RequestSurplus;
import com.PlateShare_BackEnd.PlateShare.dto.ResponseSurplusDTO;

import java.util.List;

public interface SurplusService {
    ResponseSurplusDTO createSurplus(RequestSurplus surplusDTO);
    ResponseSurplusDTO updateSurplus(Long id, ResponseSurplusDTO surplusDTO);
    ResponseSurplusDTO getSurplusById(Long id);
    List<ResponseSurplusDTO> getAllSurplus();
    void deleteSurplus(Long id);


}
