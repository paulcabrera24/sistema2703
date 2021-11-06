import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categoria } from '../../entities/categoria';
import { CategoriasService } from '../../services/categorias.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listaCategorias: Categoria[];

  categoriasInsertarForm = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl()
  });

  categoriasActualizarForm = new FormGroup({
    idcategoria: new FormControl(),
    nombre: new FormControl(),
    descripcion: new FormControl()
  });
  categoriaActualizar: Categoria;

  nuevaCategoria: any = [];

  faEdit = faEdit;
  faTimes = faTimes;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categoriasSelect().subscribe(
      (res: Categoria[]) => {
         console.log(res);
        this.listaCategorias = res;
      });
  }

  agregarCategoria(values){
    console.log(values)
    this.categoriasService.categoriasInsert(values.nombre,values.descripcion).subscribe(
      (res)=> {
        console.log(res);
        this.nuevaCategoria={
          idcategoria: res,
          nombre: values.nombre,
          descripcion: values.descripcion
        }
        this.listaCategorias.push(this.nuevaCategoria);
        this.categoriasInsertarForm.reset();
      }
    )
  }
  editarCategoria(itemCategoria: Categoria){
    console.log(itemCategoria);
    this.categoriaActualizar = itemCategoria;
  }

  actualizarCategoria(values){
    // console.log(values)
    this.categoriasService.categoriasUpdate(values.idcategoria ,values.nombre, values.descripcion).subscribe()
  }
  
  eliminarCategoria(itemCategoria: Categoria){
    var respuesta = confirm("¿Está Seguro que desea eliminar la categoría " + itemCategoria.nombre + "?");
    if (respuesta === true){
      this.categoriasService.categoriasDelete(itemCategoria.idcategoria.toString()).subscribe()
      this.listaCategorias = this.listaCategorias.filter(
        item => item.idcategoria != itemCategoria.idcategoria
      )
    }
  }

}
