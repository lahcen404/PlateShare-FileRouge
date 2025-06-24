package com.PlateShare_BackEnd.PlateShare.repository;

import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur,Long> {

}
