import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent implements OnInit {
  book = {
    title: '',
    isbn: ''
  };

  constructor(private router: Router, private bookService: BookService, private authorService: AuthorService) {}

  ngOnInit() {
    let autores = this.authorService.getAll();
    console.log(autores);
  }
  GuardarLibro() {
    const data = {
      first_name: this.book.title,
      last_name: this.book.isbn
    };
    this.bookService.createBook(data).subscribe(results => {
      alert('Libro Agregado');
      this.router.navigate(['listar']);
    }, error => {
        alert('NO Agregado');
        this.router.navigate(['/']);
    });

}
}
