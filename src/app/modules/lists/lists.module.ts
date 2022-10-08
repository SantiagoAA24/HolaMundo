import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';

@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // * Para exportar componentes definidos en el Modulo para ser usados en todos el proyecto
    ListaBasicaComponent
  ]
})
export class ListsModule { }
