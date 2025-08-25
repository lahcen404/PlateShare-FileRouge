package com.PlateShare_BackEnd.PlateShare.service;

import com.PlateShare_BackEnd.PlateShare.dto.AdminUserViewDTO;
import com.PlateShare_BackEnd.PlateShare.dto.UtilisateurDTO;

import java.util.List;

public interface AdminService {
    List<AdminUserViewDTO> getAllUsers();
    void deleteUser(Long id);
    AdminUserViewDTO addUser(UtilisateurDTO utilisateurDTO);
}
