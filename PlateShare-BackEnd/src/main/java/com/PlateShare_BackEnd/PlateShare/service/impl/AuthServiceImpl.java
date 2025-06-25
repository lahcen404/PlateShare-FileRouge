package com.PlateShare_BackEnd.PlateShare.service.impl;

import com.PlateShare_BackEnd.PlateShare.dto.AuthResponseDTO;
import com.PlateShare_BackEnd.PlateShare.dto.LoginRequestDTO;
import com.PlateShare_BackEnd.PlateShare.dto.RegisterDTO;
import com.PlateShare_BackEnd.PlateShare.enums.Role;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import com.PlateShare_BackEnd.PlateShare.security.JwtService;
import com.PlateShare_BackEnd.PlateShare.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthServiceImpl(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.utilisateurRepository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public AuthResponseDTO register(RegisterDTO registerDTO) {
        Utilisateur utilisateur=new Utilisateur();
        utilisateur.setNom(registerDTO.nom());
        utilisateur.setMotDePasse(passwordEncoder.encode(registerDTO.motDePasse()));
        utilisateur.setEmail(registerDTO.email());
        utilisateur.setTelephone(registerDTO.telephone());
        utilisateur.setRole(registerDTO.role());

        if (registerDTO.role()== Role.DONATEUR){
            utilisateur.setNomRestaurant(registerDTO.nomRestaurant());
            utilisateur.setAdresse(registerDTO.adresse());
        }
        var savedUser = utilisateurRepository.save(utilisateur);

        var jwtToken = jwtService.generateToken(savedUser);
        return new AuthResponseDTO(jwtToken, savedUser.getRole().name());
    }

    @Override
    public AuthResponseDTO login(LoginRequestDTO loginRequestDTO) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.email(),
                        loginRequestDTO.motDePasse())
        );

        var utilisateur = utilisateurRepository.findByEmail(loginRequestDTO.email())
                .orElseThrow(() -> new RuntimeException("user not found !! "));

        var jwtToken = jwtService.generateToken(utilisateur);
        return new AuthResponseDTO(jwtToken,utilisateur.getRole().name());
    }
}
