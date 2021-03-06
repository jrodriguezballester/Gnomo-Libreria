import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListarComponent } from "./libro/listar/listar.component";
import { ListarautoresComponent } from "./autor/listarautores/listarautores.component";
import { AddautorComponent } from "./autor/addautor/addautor.component";
import { AddlibroComponent } from "./libro/addlibro/addlibro.component";
import { EditarlibroComponent } from "./libro/editarlibro/editarlibro.component";

const routes: Routes = [
  { path: "listar", component: ListarComponent },
  { path: "listarAutores", component: ListarautoresComponent },
  { path: "agregarAutores", component: AddautorComponent },
  { path: "agregarLibro", component: AddlibroComponent }
  // { path: "editarLibro", component: EditarlibroComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
