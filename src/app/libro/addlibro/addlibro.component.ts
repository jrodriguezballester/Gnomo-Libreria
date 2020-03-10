import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Router } from "@angular/router";
import { AuthorService } from "src/app/services/author.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-addlibro",
  templateUrl: "./addlibro.component.html",
  styleUrls: ["./addlibro.component.css"]
})
export class AddlibroComponent implements OnInit {
  book = {
    title: "",
    isbn: ""
  };
  // seleccionado: any;
  autores: any;

  //opcionSeleccionado: any; // Iniciamos

  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.authorService.getAll().subscribe(
      result => {
        console.log(result.response);
        this.autores = result.response;
      },
      error => {
        console.log(error);
      }
    );
  }
  GuardarLibro() {
    const data = {
      title: this.book.title,
      isbn: this.book.isbn
    };

    this.bookService.createBook(data).subscribe(
      results => {
        alert("Libro Agregado");
        this.router.navigate(["listar"]);
      },
      error => {
        alert("NO Agregado");
        this.router.navigate(["/"]);
      }
    );
  }
}
