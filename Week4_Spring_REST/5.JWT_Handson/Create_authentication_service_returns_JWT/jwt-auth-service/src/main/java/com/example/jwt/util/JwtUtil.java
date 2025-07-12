package com.example.jwt.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Make sure this key is at least 256-bit (32+ characters)
    private static final String SECRET_KEY = "MySuperSecretKeyForJWTGenerationThatIsAtLeast256BitsLong123456";
    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)                             // Who is this token for
                .setIssuedAt(new Date())                          // When issued
                .setExpiration(new Date(System.currentTimeMillis() + 10 * 60 * 1000)) // 10 mins
                .signWith(key, SignatureAlgorithm.HS256)          // Sign with HS256 + secret
                .compact();                                       // Create JWT token
    }
}
