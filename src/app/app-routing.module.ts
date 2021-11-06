import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicionComponent } from './home/inicio/inicio.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { OficinasdetalleComponent } from './oficinasdetalle/oficinasdetalle.component';
import { CategoriasComponent } from './tabla/categorias/categorias.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
  {path:'',component:InicionComponent},
  {path:'oficinas',component:OficinasComponent},
  {path:'oficinasdetalle/:id',component:OficinasdetalleComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'empleados',component:EmpleadosComponent},
  {path:'tablacategorias', component: CategoriasComponent},
  {path:'consultaproveedores', component: ProveedoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
