import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-tarefa', loadChildren: './lista-tarefa/lista-tarefa.module#ListaTarefaPageModule' },
  { path: 'lista-compra', loadChildren: './lista-compra/lista-compra.module#ListaCompraPageModule' },
  { path: 'tarefa-detail/:task', loadChildren: './tarefa-detail/tarefa-detail.module#TarefaDetailPageModule' },
  { path: 'compra-detail/:task', loadChildren: './compra-detail/compra-detail.module#CompraDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
