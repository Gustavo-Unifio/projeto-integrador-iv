import { Component } from '@angular/core';
import { produto } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})

export class Tabela {
  displayedColumns: string[] = ['nome', 'quantidade'];

  oi: produto[] = [
  {nome: 'Coca-cola', quantidade: 10},
  {nome: 'Pepsi', quantidade: 20}
  ];
}