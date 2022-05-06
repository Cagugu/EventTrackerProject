package com.skilldistillery.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String title;

	@Column(name="author_name")
	private String authorName;

	private String description;
	
	private String length;
	
	private String genre;
	
	private String format;
	
	private double rating;
	
	private String imageURL;
	
	private boolean recommended;
	
	@Column(name="time_to_read")
	private String timeToRead;
	
	
	public Book() {
		super();
	}
	
	

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Book [id=");
		builder.append(id);
		builder.append(", title=");
		builder.append(title);
		builder.append(", authorName=");
		builder.append(authorName);
		builder.append(", length=");
		builder.append(length);
		builder.append(", genre=");
		builder.append(genre);
		builder.append(", format=");
		builder.append(format);
		builder.append(", rating=");
		builder.append(rating);
		builder.append(", imageURL=");
		builder.append(imageURL);
		builder.append(", recommended=");
		builder.append(recommended);
		builder.append(", timeToRead=");
		builder.append(timeToRead);
		builder.append("]");
		return builder.toString();
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getFormat() {
		return format;
	}

	public void setFormat(String format) {
		this.format = format;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public boolean isRecommended() {
		return recommended;
	}

	public void setRecommended(boolean recommended) {
		this.recommended = recommended;
	}

	public String getTimeToRead() {
		return timeToRead;
	}

	public void setTimeToRead(String timeToRead) {
		this.timeToRead = timeToRead;
	}
	
	

	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		return id == other.id;
	}



}
