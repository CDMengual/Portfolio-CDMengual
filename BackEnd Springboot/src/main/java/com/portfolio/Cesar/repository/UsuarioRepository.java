
package com.portfolio.Cesar.repository;

import com.portfolio.Cesar.model.usuario;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UsuarioRepository extends JpaRepository <usuario, Long>{
    
    @Query("select p from usuario p where p.email = :email and p.password = :password")
    List<usuario> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
    
}
