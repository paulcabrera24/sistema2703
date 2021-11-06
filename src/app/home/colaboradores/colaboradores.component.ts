import { Component, OnInit } from '@angular/core';
import { COLABORADORES } from '../../entities/colaboradores';
import { Colaborador } from '../../entities/colaborador';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  listaColaboradores = COLABORADORES;
  colaboradorElegido: Colaborador

  aleatorio = Math.floor(Math.random()*this.listaColaboradores.length)
  colaboradorGanador: Colaborador = this.listaColaboradores[this.aleatorio];
  
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(colaboradorSeleccionado:Colaborador){
    console.log(colaboradorSeleccionado)
    this.colaboradorElegido=colaboradorSeleccionado
  }

}
