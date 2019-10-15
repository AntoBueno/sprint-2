import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerinterconsultaPage } from './verinterconsulta';

const routes: Routes = [
  {
    path: '',
    component: VerinterconsultaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerinterconsultaPage]
})
export class VerinterconsultaPageModule {}
