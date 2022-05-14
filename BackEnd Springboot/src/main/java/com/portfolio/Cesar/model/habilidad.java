
package com.portfolio.Cesar.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class habilidad {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Basic
    String skill;
    String logo;
    Integer puntuacion;
    Long idPersona;

    public habilidad(Long id, String skill, String logo, Integer puntuacion, Long idPersona) {
        this.id = id;
        this.skill = skill;
        this.logo = logo;
        this.puntuacion = puntuacion;
        this.idPersona = idPersona;
    }

    public habilidad() {
    }
    
    
    
    
}
