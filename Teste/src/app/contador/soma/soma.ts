import { Component } from '@angular/core';

@Component({
  selector: 'app-soma',
  standalone: false,
  templateUrl: './soma.html',
  styleUrl: './soma.css'
})
export class Soma {
  valor = 0;

  somar(){
    this.valor = this.valor + 1
  }
}
