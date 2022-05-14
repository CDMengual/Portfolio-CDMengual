package com.portfolio.Cesar.Controller;

import com.portfolio.Cesar.model.proyecto;
import com.portfolio.Cesar.service.ProyectoService;

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
public class ControllerProyecto {
    
    @Autowired
    ProyectoService proyectoServ;
  
    @PostMapping("/new/proyecto")
    public proyecto crearProyecto(@RequestBody proyecto proyecto){
        return proyectoServ.crearProyecto(proyecto);
    }
    
    @GetMapping ("ver/proyectos")
    @ResponseBody        
    public  List<proyecto> verProyectos(){
        return proyectoServ.verProyectos();
    }
    
    @DeleteMapping("/delete/proyecto/{id}")
    public void borrarProyecto (@PathVariable Long id){
        proyectoServ.borrarProyecto(id);
    }


  @PutMapping("/modificar/proyecto")
    public void modificarProyecto(@RequestBody proyecto proyecto) {
        proyectoServ.modificarProyecto(proyecto);
    }
    
}
