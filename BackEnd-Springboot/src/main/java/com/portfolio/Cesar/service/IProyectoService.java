
package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.proyecto;
import java.util.List;


public interface IProyectoService {
    
    public List<proyecto>verProyectos();
    public proyecto crearProyecto(proyecto proyecto);
    public void borrarProyecto(Long id);
   
}
