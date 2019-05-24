import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovaCompraModalPage } from './nova-compra-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovaCompraModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovaCompraModalPage]
})
export class NovaCompraModalPageModule {}
