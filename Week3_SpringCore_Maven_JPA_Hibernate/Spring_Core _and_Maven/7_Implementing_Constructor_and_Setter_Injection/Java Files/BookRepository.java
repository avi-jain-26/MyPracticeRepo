package com.example.library;

import java.util.Arrays;
import java.util.List;

public class BookRepository {
    public List<String> getBooks() {
        return Arrays.asList("Clean Code", "Effective Java", "Design Patterns");
    }
}
