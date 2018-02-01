package com.vera.leisure.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Veeramani Bagavathi
 * on 1/14/2018.
 */
@Configuration
@EnableWebSecurity
@Profile("dev")
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
                        .inMemoryAuthentication()
                        .withUser("user").password("pswpsw123").roles("USER")
                        .and()
                        .withUser("admin").password("pswpsw123").roles("ADMIN")
                        .and()
                        .withUser("lta").password("pswpsw123").roles("LTA", "ADMIN");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                        .headers()
                        .and()
                        .exceptionHandling()
                        .and().authorizeRequests()
                        .antMatchers("/").hasAnyRole("LTA", "ADMIN", "USER")
                        .antMatchers("/api/**").hasAnyRole("LTA", "ADMIN", "USER")
                        .antMatchers("/lta/**").hasRole("LTA")
                        .antMatchers("/booking/**").hasAnyRole("LEISURE", "LTA", "RETIREE")
                        .antMatchers("/myidtravel/**").hasAnyRole("LEISURE", "LTA", "RETIREE")
                        .antMatchers("/admin/**").hasAnyRole("ADMIN", "ADMIN_VIEW")
                        .antMatchers("/tlu/**").hasAnyRole("TLU", "ADMIN")
                        .antMatchers("/management/**").hasAnyRole("MI")
                        .anyRequest().authenticated()
                        .and()
                        .sessionManagement()
                        .invalidSessionUrl("/index.html")
                        .and()
                        .jee()
//                            .authenticatedUserDetailsService(preAuthenticatedUserDetailsService)
                        .mappableRoles("ANONYMOUS", "ADMIN", "LEISURE", "LTA", "TLU", "RETIREE", "MI", "ADMIN_VIEW")
                        .and()
                        .logout()
                        .permitAll();
        http.httpBasic();
        http.csrf().disable();
    }

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200/"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
}
