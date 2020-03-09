import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const baseUrl = "http://localhost:3000/api";
@Injectable({
  providedIn: "root"
})
export class BookService {
  books: any;
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<any>(baseUrl + "/libros");
  }
  getBookId(id: number) {
    console.log(`id ${id}`);
    return this.http.get<any>(baseUrl + "/libros/" + id);
  }
  createBook(data) {
    return this.http.post<any>(baseUrl + "/libros", data);
  }
  updateBook(data) {
    console.log(
      "llega aqui " +
        data.id +
        " " +
        data.name +
        " " +
        data.isbn +
        " " +
        data.id_autor
    );
    return this.http.patch<any>(baseUrl + "/libros/" + data.id, data);
  }
  deleteBook(id) {
    return this.http.delete<any>(baseUrl + "/libros/" + id);
  }
}
