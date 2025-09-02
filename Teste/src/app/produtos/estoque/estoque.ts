import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrls: ['./estoque.css']   // <- cuidado: é "styleUrls" (array)
})
export class Estoque {
  listaProdutos = [
    { nome: 'Notebook', preco: 3500, estoque: 5 },
    { nome: 'Teclado', preco: 150, estoque: 0 },
    { nome: 'Monitor', preco: 1200, estoque: 3 }
  ];

  aumentarPrecos() {
    this.listaProdutos = this.listaProdutos.map(p => ({
      ...p,
      preco: +(p.preco * 1.1).toFixed(2)
    }));
  }

  diminuirPrecos() {
    this.listaProdutos = this.listaProdutos.map(p => ({
      ...p,
      preco: +(p.preco * 0.9).toFixed(2)
    }));
  }
}
