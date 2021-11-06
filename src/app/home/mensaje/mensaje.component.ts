import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  autor = "Albert Einstein";
  foto = "assets/albert.jpg";
  frase = "En los momentos de crisis solo la imaginación es más importante que el conocimiento"
  constructor() { }

  ngOnInit(): void {
  }

}
