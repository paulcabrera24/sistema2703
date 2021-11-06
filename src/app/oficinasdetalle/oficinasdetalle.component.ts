import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OficinasService } from '../services/oficinas.service';
import { Oficina } from '../entities/oficina';

@Component({
  selector: 'app-oficinasdetalle',
  templateUrl: './oficinasdetalle.component.html',
  styleUrls: ['./oficinasdetalle.component.css']
})
export class OficinasdetalleComponent implements OnInit {
  Oficina: Oficina;

  constructor(
    private activateRoute: ActivatedRoute,
    private oficinasService: OficinasService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params =>{
        const id = params.id;
        console.log(id);
        this.leerOficina(id);
      }
    )
  }
  leerOficina(id:string){
    this.oficinasService.oficinasDetalleSelect(id).subscribe(
      (res:Oficina[]) => {
        console.log(res);
        this.Oficina = res[0];
      }
    )
  }

}
