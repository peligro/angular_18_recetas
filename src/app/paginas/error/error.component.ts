import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './error.component.html',
  styles: ``
})
export class ErrorComponent {

}
