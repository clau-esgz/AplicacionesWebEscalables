import { Component, Input } from '@angular/core';
import { product } from '../../interfaces/product.interface';
@Component({
  selector: 'app-detalle',
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() //le pido info a la lista
  producto :product = { //valor por default

    id : 0,
    name : "sin especificar",
    price: 0,
    inStock : false,
    onSale : false,
    image : "sin especificar"
  } ;

  

}

