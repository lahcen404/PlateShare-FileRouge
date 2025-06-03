

# 🍽️ PlateShare - Gestion de Surplus Alimentaire

PlateShare est une application **web full stack** qui vise à réduire le gaspillage alimentaire en connectant les donateurs (restaurants, supermarchés, particuliers) avec les demandeurs (associations, individus dans le besoin). Cette plateforme propose une solution simple, sécurisée et efficace pour partager les surplus alimentaires.

---

## 🎯 Objectif

- Lutter contre le gaspillage alimentaire
- Aider les personnes en situation de précarité
- Créer un impact social et environnemental positif

---

## 🧑‍🤝‍🧑 Utilisateurs et Rôles

| Rôle | Capacités |
|------|-----------|
| **Administrateur** | Gérer les comptes, surveiller les publications, consulter les statistiques |
| **Donateur** | Publier, modifier, supprimer des offres de surplus |
| **Demandeur** | Rechercher, réserver des surplus, évaluer les donateurs |

---

## ⚙️ Fonctionnalités Principales

### 🔐 Authentification & Sécurité
- Authentification sécurisée avec **JWT**
- Hashage des mots de passe (**BCrypt**)
- Autorisations basées sur les rôles
- Protection des routes backend & frontend

### 📦 Pour les Donateurs
- Publication d'offres (type, quantité, expiration)
- Gestion des offres (modification, suppression)
- Historique des offres

### 🔍 Pour les Demandeurs
- Recherche avancée (filtrage par type, date, etc.)
- Réservation de surplus
- Évaluation des donateurs (notation, commentaires)

### 🧑‍💼 Espace Administrateur
- Gestion des utilisateurs
- Blocage/déblocage de comptes
- Tableaux de bord statistiques

---

## 🧱 Stack Technique

### 🖥️ Frontend
- **Framework :** Angular
- **UI :** Tailwind CSS
- **State Management :** RxJS / Services
- **HTTP Client :** Angular HttpClient

### 🖥️ Backend
- **Langage :** Java
- **Framework :** Spring Boot
- **Sécurité :** Spring Security + JWT
- **Base de données :** MySQL
- **ORM :** JPA (Hibernate)

### 🚀 Déploiement
- **Conteneurs :** Docker
- **CI/CD :** GitHub Actions / GitLab CI
- **Serveur :**  Apache 


---

## UMl Diagrams
### Use Case Diagram
![image](https://github.com/user-attachments/assets/1ff11028-56fc-49fd-b4f6-4a8b827258ef)

### Class Diagram
![image](https://github.com/user-attachments/assets/cd47a50d-24cd-472d-ab0b-ea441559779b)


---


## ⭐ Citation

> “Donner ce que l’on peut, c’est déjà changer le monde.” – PlateShare 🌍

```

