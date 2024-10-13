package com.book.BookApplication.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.book.BookApplication.model.Book;
import com.book.BookApplication.service.BookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/book")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

	@Autowired
	private BookService bookService;

//	@GetMapping("/")
//	public String displayHomePage(Model model) {
//		List<Book> listBooks = bookService.getAllBooks();
//		model.addAttribute("listBooks", listBooks);
//		return "index";
//	}
//
//	@RequestMapping("/new")
//	public String showNewBookPageToAddBook(Model model) {
//		Book book = new Book();
//		model.addAttribute("book", book);
//		return "new_book";
//	}
//	
//	@RequestMapping(value = "/save", method = RequestMethod.POST)
//	public String saveBook(@ModelAttribute("book") Book book) {
//		bookService.addBook(book);
//		return "redirect:/";
//	}
//	
//	@RequestMapping("/edit/{bookId}")
//	public ModelAndView showEditBookPage(@PathVariable(name = "bookId") int id) {
//			ModelAndView model_View = new ModelAndView("edit_book");
//			Optional<Book> book = bookService.getBookById(id);
//			System.out.println(book);
//			model_View.addObject("book", book);
//			return model_View;
//	}
//	
//	@RequestMapping("/delete/{bookId}")
//	public String deleteBook(@PathVariable(name = "bookId") int id) {
//		bookService.deleteBook(id);
//		return "redirect:/";
//	}
//
//
//
//	
	
	
	
	
	
	
	
	
	
	
	
	
	

	@GetMapping("/getAllBooks")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}

	@GetMapping("/id")
	public Optional<Book> getBookById(@PathVariable int id) {
		return bookService.getBookById(id);
	}

	@PostMapping("/addBooks")
	public void addBook(@Valid @RequestBody Book book) {
		bookService.addBook(book);
	}

	@PutMapping("/{id}")
	public void updateBook(@PathVariable int id, @RequestBody Book book) {
		bookService.updateBook(id, book);
	}

	@DeleteMapping("/deleteBookById/{id}")
	public void deleteProduct(@PathVariable int id) {
	    bookService.deleteBook(id);
	}


}
