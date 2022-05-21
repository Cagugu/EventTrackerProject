import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookNookService {

private url = environment.baseUrl + 'api/books';

books: Book[] = [];

  constructor(private http: HttpClient) { }

index() {
  return this.http.get<Book[]>(this.url).pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('KABOOM');
    }));
}

showOne(id: number) {
  return this.http.get<Book>(this.url + '/' + id).pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('KABOOM');
    }));
}

add(newBook: Book) {
  return this.http.post<Book>(this.url, newBook).pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('KABOOM');
    }));
}

updateReview(updateBook: Book) {
  return this.http.put<Book>(this.url + '/' + updateBook.id, updateBook).pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('KABOOM');
    }));
}

destroy(id:number) {
  return this.http.delete<boolean>(this.url + '/' + id).pipe(
    catchError((err:any) => {
      console.log(err);
      return throwError('KABOOM');
    }));
}


}
