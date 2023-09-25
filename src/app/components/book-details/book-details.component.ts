import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = new Book();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const bookId = +params['id']; 
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
      });
    });
  }

  orderBook(book: Book) {
    this.bookService.createBook(book).subscribe(() => {
      alert('Book was ordered');
      this.router.navigate([""])
    });
  }
}
