import { Component, OnInit } from '@angular/core';
import { Oficina } from 'src/app/entities/oficina';
import { OficinasService } from '../../services/oficinas.service';

@Component({
  selector: 'app-oficinas',
  templateUrl: './oficinas.component.html',
  styleUrls: ['./oficinas.component.css']
})
export class OficinasComponent implements OnInit {
  listaOficinas: Oficina[];
  constructor(private OficinasService: OficinasService) { }

  ngOnInit(): void {
    this.OficinasService.oficinaSelect().subscribe(
      (res: Oficina[])=>{
       console.log(res);
        this.listaOficinas = res;
      }
    )
  }

}
