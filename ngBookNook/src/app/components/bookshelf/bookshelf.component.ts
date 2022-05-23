import { Router } from '@angular/router';
import { BookNookService } from './../../services/book-nook.service';
import { ReviewComponent } from './../review/review.component';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

books: Book[] = [];

book: Book = new Book();
editBook: Book = new Book();
selected: Book | null = null;

  constructor(private bookSvc: BookNookService, private router: Router) { }

  ngOnInit(): void {
    this.books = [];
    this.reload();
  }

  displayBook(book: Book) {
    this.selected = book;
  }

reload() {
  this.books = [];
  this.bookSvc.index().subscribe(
    data => this.books = data,
    err => console.log(err)
  );

}



}
