import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addautor',
  templateUrl: './addautor.component.html',
  styleUrls: ['./addautor.component.css']
})
export class AddautorComponent implements OnInit {
  autor = {
    first_name: '',
    last_name: ''
  };

  constructor(private router: Router, private authorService: AuthorService) {}

  ngOnInit() {}
  Guardar() {
    const data = {
      first_name: this.autor.first_name,
      last_name: this.autor.last_name
    };
    this.authorService.createAuthor(data).subscribe(results => {
      alert('Autor Agregado');
      this.router.navigate(['listarAutores']);
    }, error => {
        alert('NO Agregado');
        this.router.navigate(['/']);
    });


  }
}
