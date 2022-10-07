import { Component } from '@angular/core';

@Component({ // Metadatos:
  selector: 'app-root', // * Selector para llamar al Componente desde el index.html
  templateUrl: './app.component.html', // Ruta a la plantilla app.component.html
  styleUrls: ['./app.component.scss'] // Ruta a la hoja de estilos app.component.scss
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'SantiagoAA24';

  /* Está función se ejecuta cuando se pulse un botón en el Hijo (SaludoComponent) */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }
}
