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
  customerFirstName = '';
  customerLastName = '';
  customerEmail = '';
  customerAddress = '';
  customerCardNumber = '';

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.loadCartBooks();
  }

  loadCartBooks() {
    this.bookService.getAllCartBooks().subscribe(books => {
      this.cartBooks = books;
    });
  }

  removeCartBook(id: number) {
    this.bookService.deleteBookFromCart(id).subscribe(() => {
      this.loadCartBooks();
    });
  }

  orderBooks() {
    if (!this.customerFirstName || !this.customerLastName || !this.customerEmail || !this.customerAddress || !this.customerCardNumber) {
      alert('Some fields are missing...');
      return;
    }

    this.bookService.clearCart().subscribe(() => {
      alert('Books were ordered!');
      this.loadCartBooks();
    });
  }
}
