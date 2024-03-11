package com.vera.leisure.controller;

import com.vera.leisure.security.SecurityUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Veeramani Bagavathi
 * on 1/14/2018.
 */
@RestController
public class HomeController {

    @GetMapping(value = "")
    public String index() {
        return "Hello world..!";
    }

    @GetMapping(value = "/api/version")
    public String hello() {
        return "v2.0";
    }

    @GetMapping(value = "/api/roles")
    public List<String> loggedInUserRoles() {
        return SecurityUtil.getLoggedInUserRoles();
    }
}
