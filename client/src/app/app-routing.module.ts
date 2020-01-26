import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEnvComponent } from './home-env/home-env.component';
import { GenesisComponent } from './genesis/genesis.component';

const routes: Routes = [
  {path: 'pandora', component: HomeEnvComponent},
  {path: 'genesis', component: GenesisComponent},
  {path: '', redirectTo: 'pandora' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
