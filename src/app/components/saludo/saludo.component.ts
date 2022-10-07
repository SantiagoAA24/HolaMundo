import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
// La función OnInit se ejecuta en de la renderización del Componente
// La función OnDestroy se ejecuta luego de que un Componente desaparece
// La función OnChanges se ejecuta luego de que se hace algún cambio en el Componente

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = 'Anónimo'; // Esta variable se recibe del componente padre
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>() // Esta variable se envia al componente padre

  myStyle: object = {
    color: 'blue',
    fontSize: '20px', // Los atributos que hacen referencia al estilo en scss se debe escribir en formato camelCase
    fontWeight: 'bold'
  }

  constructor() { }
  
  ngOnInit(): void { // OnInit: Hook de ciclo de vida del Componente
    // * Aquí se ponen las instrucciones previas a la renderización del Componente
    console.log('ngOnInit del Componente Saludo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Cambio! Valor anterior: ', changes['nombre'].previousValue);
    console.log('Cambio! valor nuevo: ', changes['nombre'].currentValue);
  }

  ngOnDestroy(): void {
    throw new Error('El componente va a desaparecer.');
  }  

  // * Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto a componente padre
  enviarMensajeAlPadre(): void {
    // alert(`Hola, ${this.nombre}. Alerta desde un click del botón.`)
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta de un click del botón.`)
  }

}

// * Orden del ciclo de vida de los Componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
// 3. ngAfterContentInit
// 4. ngAfterContentChecked
// 5. ngAfterViewInit
// 6. ngAfterViewChecked
// 7. ngAfterContentChecked
// 8. ngAfterViewChecked
// * 9. ngOnDestroy
