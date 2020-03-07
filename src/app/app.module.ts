import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './libro/listar/listar.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ListarautoresComponent } from './autor/listarautores/listarautores.component';
import { AddautorComponent } from './autor/addautor/addautor.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarautoresComponent,
    AddautorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
