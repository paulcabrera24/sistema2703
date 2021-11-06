import { Injectable } from '@angular/core';
import { EmpleadosComponent } from '../components/empleados/empleados.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }
  empleadosSelect(){
     const ruta ="https://servicios.campus.pe/servicioempleados.php"
     return this.http.get(ruta);
  }
}
