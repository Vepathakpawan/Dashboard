import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MachineSelectionsComponent } from './machine-selections/machine-selections.component';
import { RunningConditionComponent } from './running-condition/running-condition.component';

const routes: Routes = [

{
  path:'home-page',
  component: HomePageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
