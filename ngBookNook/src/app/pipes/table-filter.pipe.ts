import { Book } from 'src/app/models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

transform(books: Book[], searchValue: string): Book[] {

if(!books || !searchValue) {
  return books;
}
return books.filter(book => book.title.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase())
|| book.authorName.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase()) ||
book.genre.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase()));

}


}
