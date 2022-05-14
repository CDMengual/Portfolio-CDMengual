
package com.portfolio.Cesar.repository;

import com.portfolio.Cesar.model.estudio;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudioRepository extends JpaRepository <estudio, Long> {
    
    public List<estudio> findByIdPersona(Long idPersona);
    
}
