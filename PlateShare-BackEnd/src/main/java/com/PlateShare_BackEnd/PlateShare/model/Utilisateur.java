package com.PlateShare_BackEnd.PlateShare.model;

import com.PlateShare_BackEnd.PlateShare.enums.Role;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "utilisateurs")

public class Utilisateur implements UserDetails {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false)
        private String nom;

        @Column(unique = true, nullable = false)
        private String email;

        @Column(nullable = false)
        private String telephone;

        @Column(name = "mot_de_passe", nullable = false)
        private String motDePasse;

        @Enumerated(EnumType.STRING)
        @Column(name = "role_utilisateur", nullable = false)
        private Role role;

          @Column(nullable = true)
        private String nomRestaurant;

        @Column(nullable = true)
        private String adresse;


        // donateurs
        @OneToMany(mappedBy = "donateur", cascade = CascadeType.ALL)
        private List<Surplus> surplusPublies;

        @OneToMany(mappedBy = "donateur", cascade = CascadeType.ALL)
        private List<Evaluation> evaluationsRecues;

        //  demandeurs
        @OneToMany(mappedBy = "demandeur", cascade = CascadeType.ALL)
        private List<Reservation> reservations;

        @OneToMany(mappedBy = "demandeur", cascade = CascadeType.ALL)
        private List<Evaluation> evaluationsDonnees;


        // Getters  Setters


        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getNom() {
                return nom;
        }

        public void setNom(String nom) {
                this.nom = nom;
        }

        public String getEmail() {
                return email;
        }

        public void setEmail(String email) {
                this.email = email;
        }

        public String getTelephone() {
                return telephone;
        }

        public void setTelephone(String telephone) {
                this.telephone = telephone;
        }

        public String getMotDePasse() {
                return motDePasse;
        }

        public void setMotDePasse(String motDePasse) {
                this.motDePasse = motDePasse;
        }

        public Role getRole() {
                return role;
        }

        public void setRole(Role role) {
                this.role = role;
        }

        public String getNomRestaurant() {
                return nomRestaurant;
        }

        public void setNomRestaurant(String nomRestaurant) {
                this.nomRestaurant = nomRestaurant;
        }

        public String getAdresse() {
                return adresse;
        }

        public void setAdresse(String adresse) {
                this.adresse = adresse;
        }

        public List<Surplus> getSurplusPublies() {
                return surplusPublies;
        }

        public void setSurplusPublies(List<Surplus> surplusPublies) {
                this.surplusPublies = surplusPublies;
        }

        public List<Evaluation> getEvaluationsRecues() {
                return evaluationsRecues;
        }

        public void setEvaluationsRecues(List<Evaluation> evaluationsRecues) {
                this.evaluationsRecues = evaluationsRecues;
        }

        public List<Reservation> getReservations() {
                return reservations;
        }

        public void setReservations(List<Reservation> reservations) {
                this.reservations = reservations;
        }

        public List<Evaluation> getEvaluationsDonnees() {
                return evaluationsDonnees;
        }

        public void setEvaluationsDonnees(List<Evaluation> evaluationsDonnees) {
                this.evaluationsDonnees = evaluationsDonnees;
        }


        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of();
        }

        @Override
        public String getPassword() {
                return motDePasse;
        }

        @Override
        public String getUsername() {
                return email;
        }

        @Override
        public boolean isAccountNonExpired() {
                return UserDetails.super.isAccountNonExpired();
        }

        @Override
        public boolean isAccountNonLocked() {
                return UserDetails.super.isAccountNonLocked();
        }

        @Override
        public boolean isCredentialsNonExpired() {
                return UserDetails.super.isCredentialsNonExpired();
        }

        @Override
        public boolean isEnabled() {
                return UserDetails.super.isEnabled();
        }
}
