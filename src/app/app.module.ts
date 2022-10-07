import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Componentes a utilizar en este Modulo (i.e. en el proyecto)
    AppComponent
  ],
  imports: [ // Otros Modulos a utilizar en el proyecto
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // * Este es el componenete que inicia el Modulo (app.component.ts)
})
export class AppModule { }
