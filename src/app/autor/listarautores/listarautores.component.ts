import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthorService } from "src/app/services/author.service";

@Component({
  selector: "app-listarautores",
  templateUrl: "./listarautores.component.html",
  styleUrls: ["./listarautores.component.css"]
})
export class ListarautoresComponent implements OnInit {
  autores: any;
  constructor(private router: Router, private authorService: AuthorService) {}

  ngOnInit() {
    this.getAutores();
  }
  getAutores() {
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
  addAuthor() {}
}
