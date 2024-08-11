import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import { ErrorComponent } from './paginas/error/error.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { RecetasDetalleComponent } from './paginas/recetas-detalle/recetas-detalle.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { RecetasResultadosComponent } from './paginas/recetas-resultados/recetas-resultados.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PanelComponent } from './paginas/panel/panel.component';
import {AuthGuard} from './guards/auth.guard';
import { PanelCrearComponent } from './paginas/panel-crear/panel-crear.component';
import { PanelEditarComponent } from './paginas/panel-editar/panel-editar.component';
import { PanelEditarFotoComponent } from './paginas/panel-editar-foto/panel-editar-foto.component';

export const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"sobre-nosotros", component: SobreNosotrosComponent},
  {path:"recetas", component: RecetasComponent },
  {path:"recetas-resultados", component: RecetasResultadosComponent },
  {path:"recetas/detalle/:slug", component: RecetasDetalleComponent },
  {path:"contactanos", component: ContactanosComponent},
  {path:"login", component: LoginComponent },
  {path:"registro", component: RegistroComponent },
  {path:"panel", component: PanelComponent, canActivate:[AuthGuard]},
  {path:"panel-crear", component: PanelCrearComponent, canActivate:[AuthGuard]},
  {path:"panel-editar/:id", component: PanelEditarComponent, canActivate:[AuthGuard]},
  {path:"panel-editar-foto/:id", component: PanelEditarFotoComponent, canActivate:[AuthGuard]},
  {path: "**", component: ErrorComponent}
];
