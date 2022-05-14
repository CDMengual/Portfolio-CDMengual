
package com.portfolio.Cesar.Controller;
import com.portfolio.Cesar.model.persona;
import com.portfolio.Cesar.service.IPersonaService;

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
public class ControllerPersona {
    
    @Autowired
    IPersonaService personaServ;
  
    @PostMapping("/new/persona")
    public void agregarPersona(@RequestBody persona persona){
        personaServ.crearPersona(persona);
    }
    
    @GetMapping ("ver/personas")
    @ResponseBody        
    public  List<persona> verPersonas(){
        return personaServ.verPersonas();
    }
    
    @DeleteMapping("/delete/{id}")
    public void borrarPersona (@PathVariable Long id){
        personaServ.borrarPersona(id);
    }
    
    @GetMapping("/ver/persona/{id}")
    @ResponseBody
    public persona buscarPersona(@PathVariable Long id) {
        return personaServ.buscarPersona(id);
    }
     @PutMapping("/modificar/persona")
    public void modificarPersona(@RequestBody persona persona) {
        personaServ.modificarPersona(persona);
    }
    }

