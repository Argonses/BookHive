import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent {
  cartBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadCartBooks();
  }

  loadCartBooks() {
    this.bookService.getAllCartBooks().subscribe(books => {
      this.cartBooks = books;
    });
  }
}
