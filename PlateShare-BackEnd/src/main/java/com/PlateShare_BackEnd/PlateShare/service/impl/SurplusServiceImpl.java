package com.PlateShare_BackEnd.PlateShare.service.impl;

import com.PlateShare_BackEnd.PlateShare.dto.SurplusDTO;
import com.PlateShare_BackEnd.PlateShare.mapper.SurplusMapper;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.model.Surplus;
import com.PlateShare_BackEnd.PlateShare.repository.SurplusRepository;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import com.PlateShare_BackEnd.PlateShare.service.SurplusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SurplusServiceImpl implements SurplusService {

    private final SurplusRepository surplusRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final SurplusMapper surplusMapper;

    @Autowired
    public SurplusServiceImpl(SurplusRepository surplusRepository, UtilisateurRepository utilisateurRepository, SurplusMapper surplusMapper) {
        this.surplusRepository = surplusRepository;
        this.utilisateurRepository = utilisateurRepository;
        this.surplusMapper = surplusMapper;
    }

    @Override
    public SurplusDTO createSurplus(SurplusDTO surplusDTO) {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Utilisateur donateur = utilisateurRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("Donor not found with email: " + userEmail));

        Surplus surplus = new Surplus();
        surplus.setNom(surplusDTO.nom());
        surplus.setType(surplusDTO.type());
        surplus.setQuantite(surplusDTO.quantite());
        surplus.setDateExpiration(surplusDTO.dateExpiration());
        surplus.setDonateur(donateur);
        Surplus savedSurplus = surplusRepository.save(surplus);
        return surplusMapper.toDto(savedSurplus);
    }

    @Override
    public SurplusDTO updateSurplus(Long id, SurplusDTO surplusDTO) {
        Surplus existingSurplus = surplusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("suurplus not found with id: " + id));

        existingSurplus.setNom(surplusDTO.nom());
        existingSurplus.setType(surplusDTO.type());
        existingSurplus.setQuantite(surplusDTO.quantite());
        existingSurplus.setDateExpiration(surplusDTO.dateExpiration());

        Surplus updatedSurplus = surplusRepository.save(existingSurplus);

        return surplusMapper.toDto(updatedSurplus);
    }


    @Override
    public SurplusDTO getSurplusById(Long id) {
        Surplus surplus = surplusRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Surplus not found with id: " + id));
        return surplusMapper.toDto(surplus);
    }

    @Override
    public List<SurplusDTO> getAllSurplus() {
        return surplusRepository.findAll()
                .stream()
                .map(surplusMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteSurplus(Long id) {
        surplusRepository.deleteById(id);
    }


}

