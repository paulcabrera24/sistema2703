import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  proveedoresSelect(){
    const ruta ="https://servicios.campus.pe/servicioproveedores.php";
    return this.http.get(ruta)
  }
}

