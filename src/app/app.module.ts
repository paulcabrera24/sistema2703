import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FilterPipeModule } from 'ngx-filter-pipe';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HistoriaComponent } from './home/historia/historia.component';
import { NoticiasComponent } from './home/noticias/noticias.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { MensajeComponent } from './home/mensaje/mensaje.component';
import { ColaboradoresComponent } from './home/colaboradores/colaboradores.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { InicionComponent } from './home/inicio/inicio.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { OficinasdetalleComponent } from './oficinasdetalle/oficinasdetalle.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './tabla/categorias/categorias.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HistoriaComponent,
    NoticiasComponent,
    MainBannerComponent,
    MensajeComponent,
    ColaboradoresComponent,
    MainNavComponent,
    InicionComponent,
    OficinasComponent,
    TiendaComponent,
    EmpleadosComponent,
    OficinasdetalleComponent,
    ProductosComponent,
    CategoriasComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
