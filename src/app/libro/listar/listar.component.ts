import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"]
})
export class ListarComponent implements OnInit {
  // books:Array<any>;
  books: any;
  book: any;
  libroSeleccionado: any;
  mostrar = false;
  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit() {
    this.getLibros();
  }
  getLibros() {
    this.bookService.getAll().subscribe(
      result => {
        console.log("aqui");
        // console.log(result.status);
        // console.log(result.error);
        console.log(result.response);
        this.books = result.response;
        console.log("libros");
        console.log(this.books);
      },
      error => {
        console.log(error);
      }
    );
  }

  getBook(book) {
    this.mostrar = true;
    this.libroSeleccionado = book;
    console.log(this.libroSeleccionado);
  }
  eliminar(book) {
    console.log(book.id);
    this.bookService.deleteBook(book.id).subscribe(
      result => {
        alert("libro borrado");
      },
      error => {
        alert("libro NO borrado");
        console.log(error);
      }
    );
  }
  onVoted(agreed: boolean) {
    this.mostrar = agreed;
  }
}
