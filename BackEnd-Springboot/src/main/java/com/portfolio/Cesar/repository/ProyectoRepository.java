package com.portfolio.Cesar.repository;

import com.portfolio.Cesar.model.proyecto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepository extends JpaRepository <proyecto, Long> {
    
    public List<proyecto> findByIdPersona(Long idPersona);
    
}
