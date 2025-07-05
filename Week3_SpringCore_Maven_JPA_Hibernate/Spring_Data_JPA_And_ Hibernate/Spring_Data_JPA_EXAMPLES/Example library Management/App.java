package com.example.library;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import java.util.List;

public class App {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        BookRepository repo = context.getBean(BookRepository.class);

        // Save books
        repo.save(new Book("The Hobbit", "J.R.R. Tolkien"));
        repo.save(new Book("1984", "George Orwell"));

        // Fetch all
        List<Book> books = repo.findAll();
        books.forEach(b -> System.out.println(b.getTitle() + " by " + b.getAuthor()));

        context.close();
    }
}
