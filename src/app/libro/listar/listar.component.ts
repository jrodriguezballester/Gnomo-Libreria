import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 // books:Array<any>;
  books: any;
   book:any;
  // result:any;
  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.getLibros();
  }
  getLibros() {
    this.bookService.getAll().subscribe(
      result => {
        console.log('aqui');
        // console.log(result.status);
        // console.log(result.error);
        console.log(result.response);
        this.books = result.response;
        console.log('libros');
        console.log(this.books);
      },
      error => {
        console.log(error);
      }
    );
  }
  getBook(book) {
    console.log('libro');
    console.log(book);

    this.bookService.getBookId(book.id).subscribe(
      result => {
        // console.log('getBookId ' + book.id);
        // // console.log(result.status);
        // console.log("sql"+result.sql);
        // console.log(result.response);
        this.book = result.response;
        console.log('libro');
        console.log(this.book);
      },
      error => {
        console.log(error);
      }
    )

  }
}
