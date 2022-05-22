import { BookNookService } from './../../services/book-nook.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  newBook: Book = new Book();
  editBook: Book = new Book();

  books: Book[] =[];

  constructor(private router: Router, private bookSvc: BookNookService) { }

  ngOnInit(): void {
  }

  addReview(book: Book): void {
  this.bookSvc.add(this.newBook).subscribe(
    data => {
      this.newBook = new Book();
    },
    err => console.log(err)
  );
    this.router.navigateByUrl('home');
  }

  reload() {
    this.bookSvc.index().subscribe(
      data => this.books = data,
      err => console.log(err)
    );
  }

   deleteBook(id: number) {
    this.bookSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  }



}
