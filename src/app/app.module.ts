import { ListsModule } from './modules/lists/lists.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

@NgModule({
  declarations: [ // Componentes a utilizar en este Modulo (i.e. en el proyecto)
    AppComponent,
    SaludoComponent
  ],
  imports: [ // Otros Modulos a utilizar en el proyecto
    BrowserModule,
    FormsModule, // Para poder usar ngModel
    ListsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // * Este es el componenete que inicia el Modulo (app.component.ts)
})
export class AppModule { }
