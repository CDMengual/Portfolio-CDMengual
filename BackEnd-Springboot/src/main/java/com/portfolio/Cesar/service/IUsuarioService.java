package com.portfolio.Cesar.service;

import com.portfolio.Cesar.model.sesion;
import com.portfolio.Cesar.model.usuario;


public interface IUsuarioService {
    
    public void crearUsuario(usuario usuario);
    public sesion loginUsuario(usuario usuario);
    
}
