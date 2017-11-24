package com.ldapauth.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AccountCredentials implements Serializable {
    private String username;
    private String password;
    private String dn;
    private Collection<GrantedAuthority> authorities;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean credentialsNonExpired;
    private long timeBeforeExpiration;
    private long gpraceLoginsRemaining;
    private LocalDate loginDate;
}
