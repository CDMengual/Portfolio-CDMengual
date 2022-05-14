package com.portfolio.Cesar.service;


import com.portfolio.Cesar.model.sesion;
import com.portfolio.Cesar.model.usuario;
import com.portfolio.Cesar.repository.UsuarioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements IUsuarioService {
    
    @Autowired
    public UsuarioRepository usuarioRepo;
    
    @Override
    public void crearUsuario(usuario usuario) {
         usuarioRepo.save(usuario);
    }
    
    @Override
    public sesion loginUsuario(usuario usuario) {
         List<usuario>usuarios = usuarioRepo.findByEmailAndPassword(usuario.getEmail(),usuario.getPassword());
         if(usuarios.size()>0){
             sesion sesion=new sesion();
             sesion.email=usuarios.get(0).getEmail();
             return sesion;
         }
         else{
         return null;
         }
    }
    
    
    
}
