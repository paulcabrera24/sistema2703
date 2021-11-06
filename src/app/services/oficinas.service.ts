import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OficinasService {

  constructor(private http: HttpClient) { }
  oficinaSelect(){
    const ruta = "https://restcountries.com/v3/all"
    return this.http.get(ruta);
  }
  oficinasDetalleSelect(codigoPais:string){
    const ruta = "https://restcountries.com/v3/alpha/" + codigoPais;
    return this.http.get(ruta);
  }
}
