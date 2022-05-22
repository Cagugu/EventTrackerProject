import { Book } from 'src/app/models/book';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: Book[], value: string) {
    return value ? list.filter(book => book.title === value || book.genre === value) : list;
  }

}
