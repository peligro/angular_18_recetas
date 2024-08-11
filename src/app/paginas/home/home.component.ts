import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { HomeStateService } from '../../servicios/home-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  datos=inject(HomeStateService);
}
