
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
public class estudio{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Basic
     String titulo;
     String instituto;
     Date fecha_egreso;
     String logo;
     Long idPersona;

    public estudio(Long id, String titulo, String instituto, Date fecha_egreso, String logo, Long idPersona) {
        this.id = id;
        this.titulo = titulo;
        this.instituto = instituto;
        this.fecha_egreso = fecha_egreso;
        this.logo = logo;
        this.idPersona=idPersona;
    }

    public estudio() {
    }
    
    
    
    
}

