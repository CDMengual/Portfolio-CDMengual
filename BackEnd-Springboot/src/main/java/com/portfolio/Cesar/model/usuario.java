
package com.portfolio.Cesar.model;


import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class usuario {
    @Id
    String email;
    @Basic
    String password;

    public usuario(String email, String password) {
    this.email = email;
    this.password = password;
    }

    public usuario() {
    }
    
  
    
    
}
