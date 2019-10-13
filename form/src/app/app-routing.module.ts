import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './input/input.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [{ path: '', component: InputComponent },
{ path: 'show', component: ShowComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
