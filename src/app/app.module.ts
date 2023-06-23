import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservaComponent } from './components/reserva/reserva.component';
import { EditarReservaComponent } from './components/editar-reserva/editar-reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservaFormComponent,
    ReservaComponent,
    EditarReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
