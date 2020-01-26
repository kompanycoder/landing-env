import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEnvComponent } from './home-env/home-env.component';
import { GenesisComponent } from './genesis/genesis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEnvComponent,
    GenesisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
