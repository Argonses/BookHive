import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:3000/books';
  private cartApiUrl = 'http://localhost:3000/orderedBooks';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  getAllCartBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.cartApiUrl);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.cartApiUrl, book);
  }

  deleteBookFromCart(bookId: number): Observable<void> {
    const url = `${this.cartApiUrl}/${bookId}`;
    return this.http.delete<void>(url);
  }  

  clearCart(): Observable<void> { 
    return this.http.get<Book[]>(this.cartApiUrl).pipe( 
      switchMap(books => { 
        const deleteRequests = books.map(book => this.http.delete<void>(`${this.cartApiUrl}/${book.id}`));
        return forkJoin(deleteRequests).pipe(
          map(() => undefined) 
        ); 
      }) 
    ); 
  }  
}
