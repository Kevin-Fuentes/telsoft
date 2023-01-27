import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartComponent } from './components/chart/chart.component';


const routes: Routes = [{path:'home', component: HomeComponent}, {path:'chart', component: ChartComponent},{path: '**', redirectTo:'/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
