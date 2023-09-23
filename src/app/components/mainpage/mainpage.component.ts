import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  books: Book[] = []; 

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
      console.log('All books:', this.books);
    });
  }
}
