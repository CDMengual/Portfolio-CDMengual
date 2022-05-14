
package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.experiencia;
import java.util.List;


public interface IExperienciaService {
    
    public List<experiencia>verExperiencias();
    public experiencia crearExperiencia(experiencia experiencia);
    public void borrarExperiencia(Long id);
    
}
