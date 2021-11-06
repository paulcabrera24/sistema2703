import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../entities/proveedor';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  listaProveedores: Proveedor[];
  proveedoresFilter: any = { nombreempresa: '' };

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedoresService.proveedoresSelect().subscribe(
      (res: Proveedor[]) => {
        // console.log(res);
        this.listaProveedores = res;
      });
  }

}
