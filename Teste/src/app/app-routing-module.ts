import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaModule } from './estrutura/estrutura-module';
import { EstruturaRoutingModule } from './estrutura/estrutura-routing-module';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },

  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },

  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
  },

  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
