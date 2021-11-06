import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../entities/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  listaEmpleados: Empleado[];

  constructor(private EmpleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.EmpleadosService.empleadosSelect().subscribe(
      (res: Empleado[]) => {
        // console.log(res);
        this.listaEmpleados = res;
      }
    )
  }

}
