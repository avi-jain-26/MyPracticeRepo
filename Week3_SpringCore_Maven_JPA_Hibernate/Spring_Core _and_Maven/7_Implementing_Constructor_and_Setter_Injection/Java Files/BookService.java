package com.example.library;

public class BookService {
    private BookRepository bookRepository;
    private String message;

    // Constructor Injection
    public BookService(String message) {
        this.message = message;
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void showBooks() {
        System.out.println(message);
        bookRepository.getBooks().forEach(System.out::println);
    }
}
