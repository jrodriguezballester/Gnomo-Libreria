import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { AuthorService } from "src/app/services/author.service";
import { CommonModule } from "@angular/common";
// import { EventEmitter } from "events";

@Component({
  selector: "app-editarlibro",
  templateUrl: "./editarlibro.component.html",
  styleUrls: ["./editarlibro.component.css"]
})
export class EditarlibroComponent implements OnInit {
  @Input() book;
  @Output() voted = new EventEmitter<boolean>();
  mostrar;
  constructor(
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    console.log(this.book);
  }
  //actualizarLibro(name, isbn, id_autor, book.id) {
  actualizarLibro() {
    const data = {
      name: this.book.name,
      isbn: this.book.isbn,
      id: this.book.id,
      id_autor: this.book.id_autor
    };
    this.bookService.updateBook(data).subscribe(
      results => {
        alert("libro updateado");
      },
      error => {
        alert("NO updateado" + error);
      }
    );
  }
  vote(agreed: boolean) {
    this.voted.emit(agreed);
  }
}
