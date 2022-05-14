
package com.portfolio.Cesar.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class proyecto {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Basic
    String nombreProyecto;
    String info;
    String imagen;
    Long idPersona;

    public proyecto(Long id, String nombreProyecto, String info, String imagen, Long idPersona) {
        this.id = id;
        this.nombreProyecto = nombreProyecto;
        this.info = info;
        this.imagen = imagen;
        this.idPersona = idPersona;
    }

    public proyecto() {
    }
    
    
    
}
