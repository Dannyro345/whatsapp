import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovaTarefaModalPage } from './nova-tarefa-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovaTarefaModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovaTarefaModalPage]
})
export class NovaTarefaModalPageModule {}
