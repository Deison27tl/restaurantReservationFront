import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from '../model/Reserva';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
})
export class ReservaComponent implements OnInit {
  reserva: any;
  showModal = false;
  identificaciones: string[] = [];
  reservas: Reserva[] = [];
  idArray: any[] = [];
  nombresColumnas: string[] = [
    'Nombres',
    'Apellidos',
    'Tipo de documento',
    'Identificación',
    'Email',
    'Fecha de reserva',
    'Tipo de reserva',
    'Cantidad de personas',
    'Observaciones',
    'Opciones',
  ];

  constructor(public reservaService: ReservasService,  private router: Router) {}

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas() {
    this.reservaService.getReservas().subscribe((response) => {
    this.reservas = response;

      response.forEach((element) => {
        this.idArray.push(element.identificacion);
      });
      console.log(response);
    });
  }

  editarReserva(identificacion: string) {
   console.log(identificacion);
   this.router.navigate(['/editarReserva'], { queryParams: { identificacion: identificacion } });
  }
}
