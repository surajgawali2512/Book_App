package com.book.BookApplication.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.BookApplication.exceptions.ItemNotFoundException;
import com.book.BookApplication.model.Book;
import com.book.BookApplication.repository.BookRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	
	public List<Book> getAllBooks()
	{	
		return bookRepository.findAll();
	}
	
	public Optional<Book> getBookById(int id)
	{
		Optional<Book> book=bookRepository.findById(id);
		int bookId=book.get().getBookId();
		if(bookId==id)
		{
			return book;
		}
		else
		{
			throw new ItemNotFoundException("Item with id " + id + " not found.");
		}
	}
	
	public void addBook(Book book)
	{
		bookRepository.save(book);
	}
	
	public void updateBook(int id,Book book)
	{
		List<Book> bookList=getAllBooks();
		
		for(int i=0;i<bookList.size();i++)
		{
			Book bookData=bookList.get(i);
			if(bookData.getBookId()==id)
			{
				bookRepository.save(book);
			}
		}
	}
	
	public void deleteBook(int id)
	{
		Optional<Book> book=getBookById(id);
		int bookId=book.get().getBookId();
		if(bookId==id)
		{
		    bookRepository.deleteById(id);
		}
		else
		{
			throw new ItemNotFoundException("Item with id " + id + " not found.");
		}
	}
	

}
