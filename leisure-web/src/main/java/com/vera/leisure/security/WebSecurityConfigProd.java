package com.vera.leisure.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Veeramani Bagavathi
 * on 1/14/2018.
 */
@Configuration
@Profile("!dev")
public class WebSecurityConfigProd extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        System.out.println("inside !dev");
        auth
                        .inMemoryAuthentication()
                        .withUser("user").password("psw").roles("USER", "ADMIN", "LTA");
    }
}

