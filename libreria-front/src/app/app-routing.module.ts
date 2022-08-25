import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [
  { path: 'libro', component: LibroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
