package com.thanhtam.thanhtamluxury.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.thanhtam.thanhtamluxury.domain.user.CustomUserDetailService;
import com.thanhtam.thanhtamluxury.filter.JWTAthorizationFilter;
import com.thanhtam.thanhtamluxury.filter.JWTAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	private CustomUserDetailService customUserDetailService;
	private final String loginUrl = "/api/login";

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors()
			.and().csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.GET).permitAll()
			.anyRequest().authenticated()
			.and()
			.addFilter(getJWTAuthenticationFilter())
			.addFilter(new JWTAthorizationFilter(authenticationManager()))
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailService).passwordEncoder(new BCryptPasswordEncoder());
	}

	public JWTAuthenticationFilter getJWTAuthenticationFilter() throws Exception {
		final JWTAuthenticationFilter filter = new JWTAuthenticationFilter(authenticationManager());
		filter.setFilterProcessesUrl(loginUrl);
		return filter;
	}
}
