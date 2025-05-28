

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
![image](https://github.com/user-attachments/assets/94bd3b26-963a-4183-9f90-e2f2cb139a60)

### Class Diagram
![image](https://github.com/user-attachments/assets/a2fff197-2a1f-4688-afef-ad408069744f)


---


## ⭐ Citation

> “Donner ce que l’on peut, c’est déjà changer le monde.” – PlateShare 🌍

```

