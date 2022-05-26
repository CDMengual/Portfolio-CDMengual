
package com.portfolio.Cesar.model;


import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class experiencia {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Basic
    String empresa;
    String cargo;
    Date fechaInicio;
    Date fechaFin;
    String tareas;
    String logo;
    Long idPersona;
    
      public experiencia(Long id, String empresa, String cargo, Date fechaInicio, Date fechaFin,
                        String tareas, String logo, Long idPersona){ 
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.tareas = tareas;
        this.logo = logo;
        this.idPersona = idPersona;
        
}
        
    public experiencia() {
    }
    
}   


