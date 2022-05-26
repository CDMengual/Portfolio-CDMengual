package com.portfolio.Cesar.Controller;
import com.portfolio.Cesar.model.estudio;
import com.portfolio.Cesar.service.EstudioService;

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
public class ControllerEstudios {
    
    @Autowired
    EstudioService estudioServ;
  
    @PostMapping("/new/estudio")
    public estudio crearEstudio(@RequestBody estudio estudio){
        return estudioServ.crearEstudio(estudio);
    }
    
    @GetMapping ("ver/estudios")
    @ResponseBody        
    public  List<estudio> verEstudios(){
        return estudioServ.verEstudios();
    }
    
    @DeleteMapping("/delete/estudio/{id}")
    public void borrarEstudio (@PathVariable Long id){
        estudioServ.borrarEstudio(id);
    }
    
    @GetMapping("/ver/estudio/{id}")
    @ResponseBody
    public estudio buscarEstudio(@PathVariable Long id) {
        return estudioServ.buscarEstudio(id);
    }
    
     @PutMapping("/modificar/estudio")
    public void modificarEstudio(@RequestBody estudio estudio) {
        estudioServ.modificarEstudio(estudio);
    }
    
    }

