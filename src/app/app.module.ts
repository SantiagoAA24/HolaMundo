import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Componenetes que van a ser utilizables y visibles en este modulo (tambien pueden ser importados de un modulo que contiene a otros componentes)
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Este es el componenete que inicia el modulo
})
export class AppModule { }
