import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { VerfichamedicaPage } from './verfichamedica';

const routes: Routes = [
  {
    path: '',
    component: VerfichamedicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerfichamedicaPage]
})
export class VerfichamedicaPageModule {}