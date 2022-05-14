
package com.portfolio.Cesar.Controller;

import com.portfolio.Cesar.model.habilidad;
import com.portfolio.Cesar.service.HabilidadService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class ControllerHabilidades {
    
    @Autowired
    HabilidadService habilidadServ;
  
    @PostMapping("/new/habilidad")
    public habilidad crearHabilidad(@RequestBody habilidad habilidad){
        return habilidadServ.crearHabilidad(habilidad);
    }
    
    @GetMapping("ver/habilidades")
    @ResponseBody        
    public  List<habilidad> verHabilidades(){
        return habilidadServ.verHabilidades();
    }
    
    @DeleteMapping("/delete/habilidad/{id}")
    public void borrarHabilidad (@PathVariable Long id){
        habilidadServ.borrarHabilidad(id);
    }
    
    @GetMapping("/ver/habilidad/{id}")
    @ResponseBody
    public habilidad buscarHabilidad(@PathVariable Long id) {
        return habilidadServ.buscarHabilidad(id);
    }
    
     @PutMapping("/modificar/habilidad")
    public void modificarHabilidad(@RequestBody habilidad habilidad) {
        habilidadServ.modificarHabilidad(habilidad);
    }
    }

