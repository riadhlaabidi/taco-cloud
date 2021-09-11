package com.example.tacos.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
                .passwordEncoder(encoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/design", "/orders").access("hasRole('ROLE_USER')")
                .antMatchers("/", "/**").access("permitAll")
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/design")
                // customized path
                // .loginProcessingUrl("/authenticate")
                // customized form field name for username
                // .usernameParameter("pseudo")
                // customized form field name for password
                // .passwordParameter("passwd")
                .and()
                .logout()
                .logoutSuccessUrl("/")
                .and()
                .headers()
                .frameOptions()
                .sameOrigin();
    }

    /* In-memory user store
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("buzz")
                .password("infinity")
                .authorities("ROLE_USER")
                .and()
                .withUser("woody")
                .password("bullseye")
                .authorities("ROLE_USER");
    }
    */

    /* JDBC-based user store
    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery(
                        "SELECT username, password, enabled FROM Users WHERE username=?")
                .authoritiesByUsernameQuery(
                        "SELECT username authority from UserAuthorities WHERE username=?")
                .passwordEncoder(new StandardPasswordEncoder("53cr3t"));
    }
    */

    /* LDAP-backed user store
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.ldapAuthentication()
                .userSearchBase("ou=people")
                .userSearchFilter("(uid={0})")
                .groupSearchBase("ou=groups")
                .groupSearchFilter("member={0}")
                .passwordCompare() // perform comparison operation instead of binding;
                .passwordAttribute("passcode") // if the password is kept in a different attribute
                .passwordEncoder(new BCryptPasswordEncoder());
                // Remote LDAP server
                // .contextSource()
                //     .url("ldap://tacocloud.com:389/dc=tacocloud,dc=com");

                // Embedded LDAP server
                // .contextSource()
                //     .root("dc=tacocloud,dc=com")  // root suffix for the server
                //     .ldif("classpath:users.ldif");  // load server content from users.ldif in the cp
    }
    */
}
