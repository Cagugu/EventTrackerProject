import { TableFilterPipe } from './../../pipes/table-filter.pipe';
import { BookNookService } from './../../services/book-nook.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  book: Book = new Book();
  selected: Book | null = null;
  searchValue: string = "";

  constructor(private bookSvc: BookNookService) {}

  ngOnInit(): void {
    this.reload();
  }

  displayBook(book: Book) {
    this.selected = book;
  }

  reload() {
    this.bookSvc.index().subscribe(
      (data) => (this.books = data),
      (err) => console.log(err)
      );
      console.log(this.books);
  }
}
