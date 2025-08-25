package com.PlateShare_BackEnd.PlateShare.service.impl;

import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.dto.UtilisateurDTO;
import com.PlateShare_BackEnd.PlateShare.mapper.UserMapper;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import com.PlateShare_BackEnd.PlateShare.service.AdminService;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements AdminService {
    private final UtilisateurRepository utilisateurRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;


    public AdminServiceImpl(UtilisateurRepository utilisateurRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.utilisateurRepository = utilisateurRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }


    @Transactional
    public List<AdminUserViewDTO> getAllUsers() {
        return utilisateurRepository.findAll()
                .stream()
                .map(userMapper::toDTO)
                .collect(Collectors.toList());
    }


    @Transactional
    public void deleteUser(Long userId) {
        if (!utilisateurRepository.existsById(userId)) {
            throw new RuntimeException("User not found with ");
        }
        utilisateurRepository.deleteById(userId);
    }

    @Override
    @Transactional
    public AdminUserViewDTO addUser(UtilisateurDTO userDTO) {
        Utilisateur utilisateur = userMapper.toEntity(userDTO);
        utilisateur.setMotDePasse(passwordEncoder.encode(userDTO.motDePasse()));
        Utilisateur savedUser = utilisateurRepository.save(utilisateur);
        return userMapper.toDTO(savedUser);
    }


}
