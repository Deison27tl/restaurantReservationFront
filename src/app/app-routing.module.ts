import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { EditarReservaComponent } from './components/editar-reserva/editar-reserva.component';

const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "reservas", component: ReservaComponent, pathMatch: "full" },
  { path: "crearReserva", component: ReservaFormComponent, pathMatch: "full" },
  { path: "editarReserva", component: EditarReservaComponent, pathMatch: "full" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
