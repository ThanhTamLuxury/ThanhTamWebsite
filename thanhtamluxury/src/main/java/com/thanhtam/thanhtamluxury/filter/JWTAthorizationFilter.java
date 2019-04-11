package com.thanhtam.thanhtamluxury.filter;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.thanhtam.thanhtamluxury.common.SecurityConstant;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;

public class JWTAthorizationFilter extends BasicAuthenticationFilter{
	
	public JWTAthorizationFilter(AuthenticationManager authenticationManager) {
		super(authenticationManager);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String header = request.getHeader(SecurityConstant.HEADER_STRING);System.out.println(request.getRequestURI());
		if(header == null || !header.startsWith(SecurityConstant.TOKEN_PREFIX)) {
			chain.doFilter(request, response);
			return;
		}
		try {
			UsernamePasswordAuthenticationToken authenticationToken = geUsernamePasswordAuthenticationToken(request);
			SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			chain.doFilter(request, response);
		} catch (ExpiredJwtException e) {
			((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Expired token");
		}
		
	}
	
	private UsernamePasswordAuthenticationToken geUsernamePasswordAuthenticationToken(HttpServletRequest request) throws ExpiredJwtException {
		String token = request.getHeader(SecurityConstant.HEADER_STRING);
		if(token == null) {
			return null;
		}
		String username = Jwts.parser()
							  .setSigningKey(SecurityConstant.SECRET)
							  .parseClaimsJws(token.replace(SecurityConstant.TOKEN_PREFIX, ""))
							  .getBody()
							  .getSubject();
		return username != null ? new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>()) : null;
	}

	
}
