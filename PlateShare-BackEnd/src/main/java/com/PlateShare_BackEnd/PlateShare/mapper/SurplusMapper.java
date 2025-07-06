package com.PlateShare_BackEnd.PlateShare.mapper;

import com.PlateShare_BackEnd.PlateShare.dto.SurplusDTO;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import org.springframework.stereotype.Component;

@Component
public class SurplusMapper {
    public  SurplusDTO toDto(Surplus surplus) {
        return new SurplusDTO(
                surplus.getId(),
                surplus.getDonateur().getNom(),
                surplus.getDonateur().getNomRestaurant(),
                surplus.getNom(),
                surplus.getType(),
                surplus.getQuantite(),
                surplus.getDateExpiration()
        );
    }
}
