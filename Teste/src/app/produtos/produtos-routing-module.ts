import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Estoque } from './estoque/estoque';
import { Cadastro } from '../livros/cadastro/cadastro';

const routes: Routes = [
  {path: 'estoque', component: Estoque}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
