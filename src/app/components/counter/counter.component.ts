import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
    counter : number = 100; //primero nombre, luego tipo y cuanto vale
    constructor(){
   // this.counter ++;//siempre se usa this aqui en ts
   //console.log("creando el componente del contador");
   this.incrementBy(1);
   this.incrementBy(2);
   this.incrementBy();
    }

incrementBy(value: number = 1) : void{ //en caso de que no llegue nada por defecto llega un 1

this.counter += value;//siempre se usa this aqui en ts
}

}
