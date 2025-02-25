import { Component, Input } from '@angular/core';
import { product } from '../../interfaces/product.interface';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [NgClass, NgIf],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})


export class ProductoComponent {
  @Input () //lista es el papá
  producto :product = { //valor por default

    id : 0,
    name : "sin especificar",
    price: 0,
    inStock : false,
    onSale : false,
    image : "sin especificar"
  } ;

}
