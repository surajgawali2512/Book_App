package com.book.BookApplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.BookApplication.model.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{

	
}
