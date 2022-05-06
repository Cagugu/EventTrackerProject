package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Book;
import com.skilldistillery.services.BookService;

@RestController
@RequestMapping("api")
public class BookController {

	@Autowired
	private BookService bookServ;
	
	@GetMapping("books")
	public List<Book> findAll() {
		return bookServ.allBooks();
	}
	
	@GetMapping("books/search/{keyword}")
	public List<Book> findByKeyword(@PathVariable String keyword, HttpServletResponse resp) {
		List<Book> matchKeyword = bookServ.findByTitleOrDescription(keyword);
		matchKeyword.addAll(bookServ.findByAuthorName(keyword));
		if(matchKeyword.size() > 0) {
			resp.setStatus(200);
		} else {
			resp.setStatus(404);
		}
		return matchKeyword;
	}
	
//	@GetMapping("books/search/{authorName}")
//	public List<Book> findByAuthorName(@PathVariable String authorName, HttpServletResponse resp) {
//		List<Book> matchAuthor = bookServ.findByAuthorName(authorName);
//		if(matchAuthor.size() > 0) {
//			resp.setStatus(200);
//		} else {
//			resp.setStatus(404);
//		}
//		return matchAuthor;
//	}
	
	
	@PostMapping("books")
	public Book addBook(@RequestBody Book book, HttpServletResponse resp) {
		Book newBook = bookServ.createBook(book);
		if(newBook != null) {
			resp.setStatus(201);
		}
		return newBook;
	}
}
