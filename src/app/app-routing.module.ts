import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { VisitaComponent } from './pages/visita/visita.component';



const routes: Routes = [
  { path: 'visitas', component: VisitasComponent },
  { path: 'visita/:id', component: VisitaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'visitas' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
