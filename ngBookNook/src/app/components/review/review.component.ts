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

  constructor(private router: Router, private bookSvc: BookNookService) { }

  ngOnInit(): void {
  }

  review(book: Book): void {

    this.router.navigateByUrl('/review');
  }


}
