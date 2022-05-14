
package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.persona;
import com.portfolio.Cesar.repository.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements IPersonaService {
    
    @Autowired
    public PersonaRepository personaRepo; 
 
    @Override
    public List<persona> verPersonas() {
        return personaRepo.findAll();
    }

    @Override
    public void crearPersona(persona persona) {
        personaRepo.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        personaRepo.deleteById(id);
    }

    @Override
    public persona buscarPersona(Long id) {
        return personaRepo.findById(id).orElse(null);
    }


    @Override
    public void modificarPersona(persona persona)
    {personaRepo.save(persona);
    }
   
    
}
