import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './libro/listar/listar.component';
import { ListarautoresComponent } from './autor/listarautores/listarautores.component';
import { AddautorComponent} from './autor/addautor/addautor.component';


const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'listarAutores', component: ListarautoresComponent },
  { path: 'agregarAutores', component: AddautorComponent },

 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
