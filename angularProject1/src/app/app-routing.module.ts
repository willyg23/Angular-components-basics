import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent}
  // set up a path, then point this path to our component
  // 'HomeComponent' points to the class 'HomeComponent' in home.component.ts

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
