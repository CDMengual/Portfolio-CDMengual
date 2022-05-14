package com.portfolio.Cesar.service;


import com.portfolio.Cesar.model.habilidad;
import java.util.List;


public interface IHabilidadService {
    
    public List<habilidad>verHabilidades();
    public habilidad crearHabilidad(habilidad habilidad);
    public void borrarHabilidad(Long id);
    
}
