
package com.portfolio.Cesar.Controller;

import com.portfolio.Cesar.model.experiencia;
import com.portfolio.Cesar.service.ExperienciaService;

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
public class ControllerExperiencia{
    
    @Autowired
    private ExperienciaService experienciaServ;
  
    @PostMapping("/new/experiencia")
    public experiencia crearExperiencia(@RequestBody experiencia experiencia){
        return experienciaServ.crearExperiencia(experiencia);
    }
    
    @GetMapping ("ver/experiencias")
    @ResponseBody        
    public  List<experiencia> verExperiencias(){
        return experienciaServ.verExperiencias();
    }
    
    @DeleteMapping("/delete/experiencia/{id}")
    public void borrarExperiencia (@PathVariable Long id){
        experienciaServ.borrarExperiencia(id);
    }


  @PutMapping("/modificar/experiencia")
    public void modificarExperiencia(@RequestBody experiencia experiencia) {
        experienciaServ.modificarExperiencia(experiencia);
    }
    }
