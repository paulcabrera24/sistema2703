import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/entities/categoria';
import { Producto } from 'src/app/entities/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() categoriaX:Categoria;
  listaProductos: Producto[];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    // console.log("productos");
    // console.log(this.categoriaX);
  }
  ngOnChanges():void{
    // console.log("productos");
    // console.log(this.categoriaX);
    this.leerProductos()
  }
  leerProductos(){
    const idcategoria = this.categoriaX.idcategoria;
    this.productosService.productosSelect(idcategoria).subscribe(
      (res: Producto[]) =>{
        console.log(res);
        this.listaProductos = res;
      }
    )
  }
}
