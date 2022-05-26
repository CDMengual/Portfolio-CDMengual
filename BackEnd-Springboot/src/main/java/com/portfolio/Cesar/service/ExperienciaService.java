
package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.experiencia;
import com.portfolio.Cesar.repository.ExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExperienciaService implements IExperienciaService {
    
    @Autowired
    public ExperienciaRepository experienciaRepo;

    @Override
    public List<experiencia> verExperiencias() {
        return experienciaRepo.findAll();
    }

    @Override
    public experiencia crearExperiencia(experiencia experiencia) {
        return experienciaRepo.save(experiencia);
    }

    @Override
    public void borrarExperiencia(Long id) {
        experienciaRepo.deleteById(id);
    }
    
   
   public void modificarExperiencia(experiencia experiencia) {
        experienciaRepo.save(experiencia);
    }
    
    public experiencia buscarExperiencia(Long id) {
        return experienciaRepo.findById(id).orElse(null);
    }
    
}
