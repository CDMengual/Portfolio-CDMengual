package com.portfolio.Cesar.repository;

import com.portfolio.Cesar.model.persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepository extends JpaRepository <persona, Long>{
    
}
