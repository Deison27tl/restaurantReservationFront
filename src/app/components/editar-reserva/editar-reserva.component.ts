import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reserva } from '../model/Reserva';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.scss'],
})
export class EditarReservaComponent implements OnInit {
  reservaForm!: FormGroup;
  reservas: Reserva[] = [];
  id!: string;
  constructor(
    private formBuilder: FormBuilder,
    public reservaService: ReservasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservaForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      identificacion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaReserva: ['', Validators.required],
      tipoReserva: ['', Validators.required],
      cantidadPersonas: ['', Validators.required],
      observaciones: [''],
      estado: ['', Validators.required],

    });

    this.route.queryParams.subscribe((param) => {
      const identificacion = param['identificacion'];
      this.id = identificacion;
      this.editar(identificacion);
    });
  }

  editar(identificacion: string) {
    this.reservaService
      .filtrarReservaId(identificacion)
      .subscribe((response) => {
        this.reservas = response;
        console.log("Docsfsd " ,this.reservas);
        this.reservaForm.patchValue(this.reservas[0]);
      });
  }

  actualizarReserva() {
    if (this.reservaForm.valid) {


      console.log( this.reservaForm.value);

      this.reservaService.actualizarRestaurante(
        this.id,
        this.reservaForm.value
      );
    }
  }
}
