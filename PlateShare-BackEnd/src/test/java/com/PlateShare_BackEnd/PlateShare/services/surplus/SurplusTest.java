
package com.PlateShare_BackEnd.PlateShare.services.surplus;

import com.PlateShare_BackEnd.PlateShare.dto.RequestSurplus;
import com.PlateShare_BackEnd.PlateShare.dto.ResponseSurplusDTO;
import com.PlateShare_BackEnd.PlateShare.enums.Role;
import com.PlateShare_BackEnd.PlateShare.model.Utilisateur;
import com.PlateShare_BackEnd.PlateShare.repository.UtilisateurRepository;
import com.PlateShare_BackEnd.PlateShare.service.SurplusService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.test.context.TestPropertySource;

import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.*;
import static com.PlateShare_BackEnd.PlateShare.enums.TypeFood.FRUITS;

@SpringBootTest
public class SurplusTest {

    @Autowired
    private SurplusService surplusService;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    private Utilisateur donateur;

    @BeforeEach
    void setUp() {
        donateur = new Utilisateur();

        donateur.setNom("Lahcen");
        donateur.setEmail("lahcen.maskour@gml.com");
        donateur.setMotDePasse("lahcen123");
        donateur.setTelephone("0654798379");
        donateur.setNomRestaurant("Restaurant Lahcen");
        donateur.setRole(Role.DONATEUR);
        utilisateurRepository.save(donateur);

        // check if user is connected and get Email
        SecurityContextHolder.getContext().setAuthentication(
                new UsernamePasswordAuthenticationToken(donateur.getEmail(), null, donateur.getAuthorities())
        );
    }

    @Test
    void createSurplus() {

        RequestSurplus requestSurplus = new RequestSurplus(
                "Apples",
                FRUITS,
                100,
                LocalDate.of(2025, 8, 10)
        );

        ResponseSurplusDTO savedSurplus = surplusService.createSurplus(requestSurplus);


        assertNotNull(savedSurplus);
        assertNotNull(savedSurplus.id());
        assertEquals("Apples", savedSurplus.nom());
        assertEquals(100, savedSurplus.quantite());
        assertEquals("Lahcen", savedSurplus.nomDonateur());
        assertEquals("Restaurant Lahcen", savedSurplus.nomRestaurant());
    }
}
