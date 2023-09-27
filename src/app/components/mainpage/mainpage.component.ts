import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  books: Book[] = [];
  selectedGenre: string = ''; 

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.loadAllBooks();
  }

  loadAllBooks() {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }

  searchByGenre() {
    if (this.selectedGenre) {
      this.bookService.getBooksByGenre(this.selectedGenre).subscribe(books => {
        this.books = books;
      });
    } else {
      this.loadAllBooks();
    }
  }
}
