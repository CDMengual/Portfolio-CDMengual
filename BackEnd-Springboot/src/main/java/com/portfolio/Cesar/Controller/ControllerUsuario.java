
package com.portfolio.Cesar.Controller;
import com.portfolio.Cesar.model.sesion;
import com.portfolio.Cesar.model.usuario;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.Cesar.service.IUsuarioService;


@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class ControllerUsuario {
    
    @Autowired
    IUsuarioService loginServ;
    
    
   @PostMapping("/new/usuario")
    public void crearUsuario(@RequestBody usuario usuario){
        loginServ.crearUsuario(usuario);
    }
    
    @PostMapping("/login")
    public sesion loginUsuario(@RequestBody usuario usuario){
        return loginServ.loginUsuario(usuario);
    }
    
}
