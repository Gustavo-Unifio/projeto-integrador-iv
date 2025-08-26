import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  mostrarOcultar = true;

  toggleOcultar() {
    this.mostrarOcultar = !this.mostrarOcultar;
  }

  listaAluno = [
    { id: '101', nome: 'Thiago', ativo: true },
    { id: '102', nome: 'Sergio', ativo: false },
    { id: '103', nome: 'Marinke', ativo: true }
  ];

  fontSize: number = 16;

  maisFonte(){
    this.fontSize += 2;
  }

  menosFonte(){
    this.fontSize -= 2;
  }
}
