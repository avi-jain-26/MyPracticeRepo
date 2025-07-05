package com.example.library;

import org.springframework.stereotype.Component;

@Component
public class BookService {

    public void display() {
        System.out.println("📚 BookService: Spring Bean working!");
    }
}
