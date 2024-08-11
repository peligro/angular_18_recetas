import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sobre-nosotros.component.html',
  styles: ``
})
export class SobreNosotrosComponent {

}
