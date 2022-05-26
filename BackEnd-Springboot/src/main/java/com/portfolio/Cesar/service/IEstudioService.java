
package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.estudio;
import java.util.List;


public interface IEstudioService {
    
    public List<estudio>verEstudios();
    public estudio crearEstudio(estudio estudio);
    public void borrarEstudio(Long id);
    
}
