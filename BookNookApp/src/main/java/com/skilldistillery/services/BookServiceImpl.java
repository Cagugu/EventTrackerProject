package com.skilldistillery.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Book;
import com.skilldistillery.repositories.BookRepository;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepo;
	
	@Override
	public Book findById(int id) {
		return bookRepo.findById(id);
	}

	@Override
	public List<Book> allBooks() {
		return bookRepo.findAll();
	}

	@Override
	public Book createBook(Book book) {
		return bookRepo.saveAndFlush(book);
	}

	@Override
	public List<Book> findByTitleOrDescription(String keyword) {
		keyword = "%" + keyword + "%";
		return bookRepo.findByTitleLikeOrDescriptionLike(keyword, keyword);
	}
	
	
	@Override
	public List<Book> findByAuthorName(String keyword) {
		keyword = "%" + keyword + "%";
		return bookRepo.findByAuthorNameLike(keyword);
	}
	
	

	@Override
	public Book update(Book book, int id) {
		book.setId(id);
		if(bookRepo.existsById(id)) {
			return bookRepo.save(book);
		}
		return null;
	}

	@Override
	public void deleteBookById(int id) {
		if(bookRepo.existsById(id)) {
			bookRepo.deleteById(id);
		}
	}

	
	
	
	
}
