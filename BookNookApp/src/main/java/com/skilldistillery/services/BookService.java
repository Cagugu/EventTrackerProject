package com.skilldistillery.services;


import java.util.List;

import com.skilldistillery.entities.Book;

public interface BookService {

	public Book findById(int id);
	public List<Book> allBooks();
	public List<Book> findByTitleOrDescription(String keyword);
	public List<Book> findByAuthorName(String keyword);
	public Book createBook(Book book);
	public Book update(Book book, int id);
	public void deleteBookById(int id);
}
