import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBooke(book: Book): Observable<Book> {
    return of(book);
  }

}
