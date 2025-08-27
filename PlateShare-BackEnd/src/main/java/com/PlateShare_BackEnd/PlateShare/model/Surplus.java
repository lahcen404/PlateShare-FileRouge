package com.PlateShare_BackEnd.PlateShare.model;

import com.PlateShare_BackEnd.PlateShare.enums.TypeFood;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "surplus_items")
public class Surplus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TypeFood type;

    @Column(nullable = false)
    private int quantite;

    @Column(nullable = false)
    private LocalDate dateExpiration;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "donateur_id", nullable = false)
    private Utilisateur donateur;

    @OneToMany(mappedBy = "surplus", cascade = CascadeType.ALL)
    private List<Reservation> reservations;


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

    public TypeFood getType() {
        return type;
    }

    public void setType(TypeFood type) {
        this.type = type;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public LocalDate getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(LocalDate dateExpiration) {
        this.dateExpiration = dateExpiration;
    }

    public Utilisateur getDonateur() {
        return donateur;
    }

    public void setDonateur(Utilisateur donateur) {
        this.donateur = donateur;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
