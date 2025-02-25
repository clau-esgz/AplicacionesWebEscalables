import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { product } from '../../interfaces/product.interface';
import { ProductoComponent } from '../producto/producto.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductoComponent,DetalleComponent,NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
@Input()


seleccionado :product = { //valor por default
  id : 0,
  name : "sin especificar",
  price: 0,
  inStock : false,
  onSale : false,
  image : "sin especificar"
} ;

  //lista de productos de "tipo" interfaz 
 productos :product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false,image:"https://laptopmedia.com/wp-content/uploads/2022/10/c08280389.jpg" },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true , image:"https://chedrauimx.vtexassets.com/arquivos/ids/44053962-1600-auto?v=638751051246400000&width=1600&height=auto&aspect=true"},
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false,image:"https://www.bing.com/th?id=OPHS.L%2f9fOdok1tay8w474C474&o=5&pid=21.1&w=148&h=148&qlt=100&dpr=1.1&bw=6&bc=FFFFFF" },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true,image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509812ld.jpg" },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false,image:"https://m.media-amazon.com/images/I/61ts+5DlCQL._AC_SL1500_.jpg" },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false,image:"https://m.media-amazon.com/images/I/61TSVEWPn5S._AC_SL1500_.jpg"},
    {id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true,image:"https://th.bing.com/th/id/R.fe05ce4b39325ec82363a2b0b8035152?rik=C2jOPCkmU2S3FA&pid=ImgRaw&r=0" },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image:"https://th.bing.com/th/id/OIP.jf5DwXxUxMDOm22PeRe20QHaIu?rs=1&pid=ImgDetMain" },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true,image:"https://th.bing.com/th/id/OIP.0Zkz3g26yAQLtPKIfE_megHaHa?rs=1&pid=ImgDetMain" },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false,image:"https://th.bing.com/th/id/OIP.VhYYhx_pj3z9y829wfSKxQHaGx?rs=1&pid=ImgDetMain" },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true,image:"https://www.worten.pt/i/300db39ff99c4bbafc9de1b410c4e5058bb73984.jpg" },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false,image:"https://th.bing.com/th/id/OIP.P9Nll2IQc3fEN6CmJ9FdYAHaHa?rs=1&pid=ImgDetMain" },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true,image:"https://th.bing.com/th/id/OIP.USOu5RsFh3urof94p-q_xwHaFp?rs=1&pid=ImgDetMain" },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false,image:"https://ddtech.mx/assets/uploads/861311bd60bf6ede94bfe7ab01e705a3.png" },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true ,image:"https://th.bing.com/th?id=OPHS.FzBYoeGUX7oqmA474C474&w=248&h=248&o=5&dpr=1.1&pid=21.1" },

 ];

 muestraInfo(seleccionadoApp: product) : void
 {

  this.seleccionado = seleccionadoApp;


 }


}
