import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'conversa-detail', loadChildren: './conversa-detail/conversa-detail.module#ConversaDetailPageModule' },
  { path: 'nova-conversa-modal', loadChildren: './nova-conversa-modal/nova-conversa-modal.module#NovaConversaModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
