
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
public class persona {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Basic
    private String nombre;
    private String apellido;
    private String puesto;
    private String ciudad; 
    private String acerca_de_mi;
    private String url_foto;
    
    
      public persona(Long id, String nombre, String apellido, String puesto, String ciudad, String acerca_de_mi, String url_foto) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.puesto = puesto;
        this.ciudad = ciudad;
        this.acerca_de_mi= acerca_de_mi;
        this.url_foto= url_foto;
}
        
    public persona() {
    }
    
}   


