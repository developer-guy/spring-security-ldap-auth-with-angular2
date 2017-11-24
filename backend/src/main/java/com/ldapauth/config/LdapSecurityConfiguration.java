package com.ldapauth.config;


import com.ldapauth.filters.BeforeLoginProcessingFilter;
import com.ldapauth.filters.TokenAuthenticationFilter;
import com.ldapauth.handlers.CustomAuthenticationSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.encoding.LdapShaPasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class LdapSecurityConfiguration extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
                csrf().
                disable().
                authorizeRequests().
                antMatchers(HttpMethod.POST, "/login¨").permitAll().
                antMatchers(HttpMethod.GET, "/**").permitAll().
                antMatchers("/api/**").authenticated().
                and().
                addFilterBefore(authenticationProcessingFilter(),
                        UsernamePasswordAuthenticationFilter.class).
                addFilterBefore(new TokenAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }


    @Bean
    public AbstractAuthenticationProcessingFilter authenticationProcessingFilter() throws Exception {
        BeforeLoginProcessingFilter beforeLoginProcessingFilter = new BeforeLoginProcessingFilter("/login", authenticationManager());
        beforeLoginProcessingFilter.setAuthenticationSuccessHandler(new CustomAuthenticationSuccessHandler());
        return beforeLoginProcessingFilter;
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .ldapAuthentication()
                .userDnPatterns("uid={0},ou=people")
                .groupSearchBase("ou=groups")
                .contextSource()
                .url("ldap://localhost:8389/dc=springframework,dc=org")
                .and()
                .passwordCompare()
                .passwordEncoder(new LdapShaPasswordEncoder())
                .passwordAttribute("userPassword");
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.
                ignoring()
                .antMatchers("/static/**"); // #3
    }

}
