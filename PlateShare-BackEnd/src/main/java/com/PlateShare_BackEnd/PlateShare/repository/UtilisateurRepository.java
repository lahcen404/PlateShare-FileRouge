package com.PlateShare_BackEnd.PlateShare.repository;

import com.PlateShare_BackEnd.PlateShare.enums.Role;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur,Long> {

    Optional<Utilisateur> findByEmail(String email);
    long countByRole(Role role);
}
