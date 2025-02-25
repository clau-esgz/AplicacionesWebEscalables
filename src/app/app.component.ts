import { Component } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';


@Component({
  //comportamiento de componente
  selector: 'app-root',// con que nombre se va a manejar ese selector
  imports: [HeaderComponent,FooterComponent, ContentComponent],
  templateUrl: './app.component.html', // de donde va a tomar el html el componente
  styleUrl: './app.component.css'// de donde va a tomar el css
})
export class AppComponent {
  title = 'escalables01';
}
