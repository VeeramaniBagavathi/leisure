package com.vera.leisure.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Veeramani Bagavathi
 * on 1/14/2018.
 */
public final class SecurityUtil {
    private SecurityUtil() {

    }

    public static List<String> getLoggedInUserRoles() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getAuthorities().stream().map(authorities -> authorities.getAuthority()).collect(Collectors.toList());
    }
}
