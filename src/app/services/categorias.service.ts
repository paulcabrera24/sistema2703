import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
  

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  categoriasSelect(){
    const ruta ="https://servicios.campus.pe/serviciocategorias.php";
    return this.http.get(ruta);
  }

  categoriasInsert(nombre:string,descripcion:string){
    const ruta ="https://servicios.campus.pe/registrarcategorias.php";
    const formData: FormData = new FormData();
    formData.append("nombre",nombre);
    formData.append("descripcion",descripcion);

    return this.http.post(ruta,formData).pipe(
      map((res)=>{
        return res;
      })
    )
  }

  categoriasUpdate(idcategoria: string, nombre:string, descripcion:string){
    const ruta ="https://servicios.campus.pe/categoriasactualizar.php";

    const formData: FormData = new FormData();
    formData.append("idcategoria",idcategoria);
    formData.append("nombre",nombre);
    formData.append("descripcion",descripcion);

    return this.http.post(ruta,formData)
  }

  categoriasDelete(idcategoria: string){
    const ruta ="https://servicios.campus.pe/categoriaseliminar.php";

    const formData: FormData = new FormData();
    formData.append("idcategoria",idcategoria);

    return this.http.post(ruta,formData)
  }
}
