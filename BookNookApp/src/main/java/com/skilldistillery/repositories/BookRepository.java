package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

	//REPO IS FOR QUERIES
	List<Book> findByTitleLikeOrDescriptionLike(String keyword1, String keyword2);
	List<Book> findByAuthorNameLike(String keyword);
}
