import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author: any;
  id: number;
  constructor(private http: HttpClient) {}
  getAll() {
  //  return this.http.get<any>(baseUrl + '/autor');

    this.http.get<any>(baseUrl + '/autor').subscribe(
      result => {
        console.log(result.response);
        return result.response;
      },
      error => {
        console.log(error);
      }
    );;
  }
  // getAuthorId(id: number) {
  //   console.log(`id ${id}`);
  //   return this.http.get<any>(baseUrl + '/autor/' + id);
  // }
createAuthor(data) {
     return this.http.post<any>(baseUrl + '/autor', data );
}
}
