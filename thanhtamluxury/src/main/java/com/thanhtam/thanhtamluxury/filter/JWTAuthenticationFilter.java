package com.thanhtam.thanhtamluxury.filter;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thanhtam.thanhtamluxury.common.SecurityConstant;
import com.thanhtam.thanhtamluxury.domain.user.Account;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	private AuthenticationManager authenticationManager;

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		try {
			Account user = new ObjectMapper().readValue(request.getInputStream(), Account.class);
			return this.authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		} catch (IOException e) {
			throw new RuntimeException();
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		String username = ((User) authResult.getPrincipal()).getUsername();
		String token = Jwts.builder()
						   .setSubject(username)
						   .setExpiration(new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME))
						   .signWith(SignatureAlgorithm.HS512, SecurityConstant.SECRET)
						   .compact();
		String beareToken = SecurityConstant.TOKEN_PREFIX + token;
		response.addHeader(SecurityConstant.HEADER_STRING, beareToken);
	}
	
	
}
