import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../entities/categoria';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  categoriaElegida: Categoria;
  listaCategorias: Categoria[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.categoriasSelect().subscribe(
      (res: Categoria[]) => {
         console.log(res);
        this.listaCategorias = res;
      }
    )
  }
  seleccionar(categoriaSeleccionada:Categoria){
    console.log(categoriaSeleccionada)
    this.categoriaElegida=categoriaSeleccionada
  }

}
