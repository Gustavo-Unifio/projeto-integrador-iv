import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {

  nome = "Thiago";

  mostrarSalario = true;

  toggleMostrar() {
    this.mostrarSalario = true;
  }

  toggleOcultar() {
    this.mostrarSalario = false;
  }


}
