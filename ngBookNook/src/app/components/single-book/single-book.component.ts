import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookNookService } from 'src/app/services/book-nook.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  books: Book[] = [];

  book: Book = new Book();
  editBook: Book = new Book();
  selected: Book | null = null;
  display: boolean = false;

    constructor(private bookSvc: BookNookService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {


    if (!this.selected && this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.show(parseInt(id));
      }
    }

    }



    show (id: number) {
      this.bookSvc.showOne(id).subscribe(data => {this.selected = data;
        console.log(this.selected);
  //       if (!this.selected) {
  // this.router.navigateByUrl('/jeff');
  //       }
      }, err=> console.log(err)
      );
    }

  reload() {
    if ( this.route.snapshot.paramMap.get('id')) {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.show(parseInt(id));
      }
    }
  }
  setEditBook() {
    this.editBook = Object.assign({}, this.selected);
  }

  updateBook(book: Book){
    this.bookSvc.updateReview(book).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editBook = book; //check for issues
        this.display = false;
      }
    );
  }
  deleteBook(id: number) {
    this.bookSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
    this.reload();
    this.selected = null;
    this.router.navigateByUrl('/mybookshelf');
  }


}
