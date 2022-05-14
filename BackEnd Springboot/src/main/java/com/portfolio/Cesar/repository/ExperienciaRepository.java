
package com.portfolio.Cesar.repository;

import com.portfolio.Cesar.model.experiencia;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienciaRepository extends JpaRepository <experiencia, Long> {
    
     public List<experiencia> findByIdPersona(Long idPersona);
    
}
