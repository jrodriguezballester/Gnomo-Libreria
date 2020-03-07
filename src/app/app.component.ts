import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnomoPrueba';
  constructor(private router: Router) {}
  listar() {
  this.router.navigate(['listar']);
  }
  listarAutores() {
  this.router.navigate(['listarAutores']);
  }
  newAuthor(){
    this.router.navigate(['agregarAutores']);
  }
}
