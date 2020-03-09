import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListarComponent } from "./libro/listar/listar.component";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { ListarautoresComponent } from "./autor/listarautores/listarautores.component";
import { AddautorComponent } from "./autor/addautor/addautor.component";
import { AddlibroComponent } from "./libro/addlibro/addlibro.component";
import { EditarlibroComponent } from "./libro/editarlibro/editarlibro.component";
import { BookService } from "./services/book.service";
import { AuthorService } from "./services/author.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarautoresComponent,
    AddautorComponent,
    AddlibroComponent,
    EditarlibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [BookService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
